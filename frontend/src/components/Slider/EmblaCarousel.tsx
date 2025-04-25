// 'use client';

// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import Image from 'next/image';
// import styles from './Slider.module.css';

// // Импорт Swiper модулей
// import { Navigation } from 'swiper/modules';

// interface Slide {
//   id: number;
//   src: string;
//   alt: string;
// }

// const Slider: React.FC = () => {
//   const swiperRef = useRef<any>(null);

//   const slides: Slide[] = [
//     {
//       id: 1,
//       src: '/images/main_slider/img_1083.jpg',
//       alt: 'Синя сукня',
//     },
//     {
//       id: 2,
//       src: '/images/main_slider/img_1080.jpg',
//       alt: 'Зелена сукня',
//     },
//     {
//       id: 3,
//       src: '/images/main_slider/img_1078.jpg',
//       alt: 'Чорна сукня',
//     },
//   ];

//   const updateClasses = (swiper: any) => {
//     swiper.slides.forEach((slide: HTMLElement) => {
//       slide.classList.remove(
//         styles.activeSlide,
//         styles.prevSlide,
//         styles.nextSlide
//       );
//     });

//     const activeSlide = swiper.slides[swiper.activeIndex];
//     const prevSlide = swiper.slides[swiper.activeIndex - 1];
//     const nextSlide = swiper.slides[swiper.activeIndex + 1];

//     if (activeSlide) activeSlide.classList.add(styles.activeSlide);
//     if (prevSlide) prevSlide.classList.add(styles.prevSlide);
//     if (nextSlide) nextSlide.classList.add(styles.nextSlide);
//   };

//   const duplicatedSlides = [...slides, ...slides];

//   return (
//     <>
//       <Swiper
//         className={styles.swiper}
//         modules={[Navigation]}
//         loop={true}
//         centeredSlides={true}
//         slidesPerView={1}
//         spaceBetween={9}
//         navigation={{
//           nextEl: '.custom-next',
//           prevEl: '.custom-prev',
//         }}
//         breakpoints={{
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 4,
//           },
//           1228: {
//             slidesPerView: 3,
//             spaceBetween: 9,
//           },
//         }}
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper;
//           updateClasses(swiper);
//         }}
//         onSlideChange={(swiper) => updateClasses(swiper)}
//       >
//         {duplicatedSlides.map((slide, index) => (
//           <SwiperSlide key={`${slide.id}-${index}`} className={styles.slide}>
//             <Image
//               src={slide.src}
//               alt={slide.alt}
//               width={292}
//               height={409}
//               priority={true}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {/* Кастомные стрелки */}
//       <button className={`custom-prev ${styles.customArrow}`}>
//         <img
//           src="/images/icons/arrow_left.svg"
//           alt="Previous"
//           className={styles.icon_prev}
//         />
//       </button>
//       <button className={`custom-next ${styles.customArrow}`}>
//         <img
//           src="/images/icons/arrow_right.svg"
//           alt="Next"
//           className={styles.icon_next}
//         />
//       </button>
//     </>
//   );
// };

// export default Slider;

'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import styles from './EmblaCarousel.module.css';

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  options?: EmblaOptionsType;
};

const slideImages = [
  '/images/main_slider/img_1083.jpg',
  '/images/main_slider/img_1080.jpg',
  '/images/main_slider/img_1078.jpg',
  '/images/main_slider/img_1083.jpg',
  '/images/main_slider/img_1080.jpg',
  '/images/main_slider/img_1078.jpg',
];

const EmblaCarousel: React.FC<PropType> = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const tweenFactor = useRef(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0.6, 1).toString();
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slideImages.map((index) => (
            <div className={styles.embla__slide} key={index}>
              <img
                className={styles.embla__slide__img}
                src={index}
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
