'use client';

import React from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';
// import Slider from '../Slider/Slider';
import Image from 'next/image';
import EmblaCarousel from '../Slider/EmblaCarousel';
const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.hero__subtitle}>нова</p>
        <h1 className={styles.hero__title}>КОЛЕКЦІЯ</h1>
        <p className={styles.hero__subtitle_bottom}>La fleur</p>

        <div className={styles.hero__textContainer}>
          <p className={styles.hero__subtext_left}>
            Наша остання колекція одягу
          </p>
          <p className={styles.hero__subtext_right}>
            Отримуйте привабливі пропозиції на свою першу покупку
          </p>
        </div>
      </div>

      <EmblaCarousel />

      <div className={styles.container}>
        <Link href="/collections">
          <button className={styles.hero__buyNow}>Купити Зараз</button>
        </Link>
        <div className={styles.hero__decorContainer}>
          <div className={styles.hero__decorBlock_left}>
            <Image
              src="/images/decorations/siren_1.svg"
              alt="Siren"
              width={122}
              height={340}
              className={styles.hero__decorImage_left}
            />
            <p className={styles.hero__text_left}>
              Наша остання колекція одягу
            </p>
          </div>
          <div className={styles.hero__decorBlock_right}>
            <p className={styles.hero__text_right}>
              Отримуйте привабливі пропозиції на свою першу покупку
            </p>
            <Image
              src="/images/decorations/siren_2.svg"
              alt="Siren"
              width={150}
              height={203}
              className={styles.hero__decorImage_right}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
