// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import styles from './Slider.module.css';
// import Icon from '../Icon/Icon';

// interface Slide {
//   id: number;
//   src: string;
//   alt: string;
// }

// const Slider: React.FC = () => {
//   const slides: Slide[] = [
//     { id: 1, src: '/images/products/slide1.jpg', alt: 'Зелена сукня' }, // Левый слайд
//     { id: 2, src: '/images/products/slide2.jpg', alt: 'Синя сукня' }, // Центральный слайд
//     { id: 3, src: '/images/products/slide3.jpg', alt: 'Чорна сукня' }, // Правый слайд
//   ];

//   const [currentSlides, setCurrentSlides] = useState<Slide[]>(slides);

//   const nextSlide = () => {
//     setCurrentSlides((prevSlides) => [
//       prevSlides[2], // Правый слайд становится левым
//       prevSlides[0], // Левый слайд становится центральным
//       prevSlides[1], // Центральный слайд становится правым
//     ]);
//   };

//   const prevSlide = () => {
//     setCurrentSlides((prevSlides) => [
//       prevSlides[1], // Центральный слайд становится левым
//       prevSlides[2], // Правый слайд становится центральным
//       prevSlides[0], // Левый слайд становится правым
//     ]);
//   };

//   return (
//     <div className={styles.slider}>
//       <button
//         onClick={prevSlide}
//         aria-label="Previous slide"
//         className={`${styles.slider__arrow} ${styles.slider__arrowLeft}`}
//       >
//         <Icon name="arrow_left" size={24} />
//       </button>

//       <div className={styles.slider__container}>
//         {currentSlides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`${styles.slide} ${
//               index === 0
//                 ? styles.leftSlide
//                 : index === 1
//                   ? styles.centerSlide
//                   : styles.rightSlide
//             }`}
//           >
//             <Image
//               src={slide.src}
//               alt={slide.alt}
//               width={index === 1 ? 292 : 251} // Центральный слайд больше
//               height={index === 1 ? 409 : 352}
//               priority={true}
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={nextSlide}
//         aria-label="Next slide"
//         className={`${styles.slider__arrow} ${styles.slider__arrowRight}`}
//       >
//         <Icon name="arrow_right" size={24} />
//       </button>
//     </div>
//   );
// };

// export default Slider;

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
    { id: 1, src: '/images/products/slide1.jpg', alt: 'Зелена сукня' },
    { id: 2, src: '/images/products/slide2.jpg', alt: 'Синя сукня' },
    { id: 3, src: '/images/products/slide3.jpg', alt: 'Чорна сукня' },
  ];

  const [currentSlides, setCurrentSlides] = useState<Slide[]>(slides);

  const nextSlide = () => {
    setCurrentSlides((prevSlides) => [
      prevSlides[2], // Правый слайд становится левым
      prevSlides[0], // Левый слайд становится центральным
      prevSlides[1], // Центральный слайд становится правым
    ]);
  };

  const prevSlide = () => {
    setCurrentSlides((prevSlides) => [
      prevSlides[1], // Центральный слайд становится левым
      prevSlides[2], // Правый слайд становится центральным
      prevSlides[0], // Левый слайд становится правым
    ]);
  };

  return (
    <div className={styles.slider}>
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className={`${styles.slider__arrow} ${styles.slider__arrowLeft}`}
      >
        <Icon name="arrow_left" size={38} />
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
              width={292} // Указываем максимальный размер
              height={409} // Указываем максимальный размер
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
        <Icon name="arrow_right" size={38} />
      </button>
    </div>
  );
};

export default Slider;
