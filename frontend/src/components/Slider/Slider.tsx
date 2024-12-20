'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Slider.module.css';
import Icon from '../Icon/Icon';

interface Slide {
  id: number;
  src: string;
  alt: string;
}

const Slider: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      src: '/images/products/robe_emerald/robe_emerald_4.jpg',
      alt: 'Зелена сукня',
    },
    {
      id: 2,
      src: '/images/products/blue_corset_dress/blue_corset_dress.jpg',
      alt: 'Синя сукня',
    },
    {
      id: 3,
      src: '/images/products/set_purple_diamond/set_purple_diamond_3.jpg',
      alt: 'Чорна сукня',
    },
  ];

  const [currentSlides, setCurrentSlides] = useState<Slide[]>(slides);

  const nextSlide = () => {
    setCurrentSlides((prevSlides) => [
      prevSlides[2],
      prevSlides[0],
      prevSlides[1],
    ]);
  };

  const prevSlide = () => {
    setCurrentSlides((prevSlides) => [
      prevSlides[1],
      prevSlides[2],
      prevSlides[0],
    ]);
  };

  return (
    <div className={styles.slider}>
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className={`${styles.slider__arrow} ${styles.slider__arrowLeft}`}
      >
        <Icon name="arrow_left" width={14} height={38} />
      </button>

      <div className={styles.slider__container}>
        {currentSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === 0
                ? styles.leftSlide
                : index === 1
                  ? styles.centerSlide
                  : styles.rightSlide
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={292}
              height={409}
              className={
                index === 1 ? styles.centerSlideImg : styles.sideSlideImg
              }
              priority={true}
            />
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className={`${styles.slider__arrow} ${styles.slider__arrowRight}`}
      >
        <Icon name="arrow_right" width={14} height={38} />
      </button>
    </div>
  );
};

export default Slider;
