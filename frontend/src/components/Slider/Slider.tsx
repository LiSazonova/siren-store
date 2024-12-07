'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Slider.module.css';

interface Slide {
  id: number;
  src: string;
  alt: string;
}

const Slider: React.FC = () => {
  const slides: Slide[] = [
    { id: 1, src: '/images/products/slide1.jpg', alt: 'Зелена сукня' },
    { id: 2, src: '/images/products/slide2.jpg', alt: 'Синя сукня' },
    { id: 3, src: '/images/products/slide3.jpg', alt: 'Чорна сукня' },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getSlideClass = (index: number): string => {
    if (index === currentIndex) return styles.centerSlide;
    if (index === (currentIndex - 1 + slides.length) % slides.length)
      return styles.leftSlide;
    if (index === (currentIndex + 1) % slides.length) return styles.rightSlide;
    return styles.hiddenSlide;
  };

  return (
    <div className={styles.slider}>
      <button
        onClick={prevSlide}
        className={`${styles.slider__arrow} ${styles.slider__arrowLeft}`}
        aria-label="Previous slide"
      >
        ⟵
      </button>
      <div className={styles.slider__container}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slider__slide} ${getSlideClass(index)}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={292} // Размеры будут адаптироваться через CSS
              height={409}
              priority={true}
            />
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className={`${styles.slider__arrow} ${styles.slider__arrowRight}`}
        aria-label="Next slide"
      >
        ⟶
      </button>
    </div>
  );
};

export default Slider;
