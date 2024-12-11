import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CollectionsPage.module.css';

export default function CollectionsPage() {
  const collections = [
    {
      title: 'MOON CRYSTAL',
      image: '/images/moon_crystal.jpg',
      href: '/collections/moon_crystal',
    },
    {
      title: 'CHRISTMAS SONG',
      image: '/images/christmas_song.jpg',
      href: '/collections/christmas_song',
    },
  ];

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>КОЛЕКЦІЇ</h1>
      <div className={styles.collections}>
        {collections.map((collection) => (
          <div key={collection.title} className={styles.collection}>
            <Link href={collection.href}>
              <Image
                src={collection.image}
                alt={collection.title}
                width={292}
                height={374}
                className={styles.image}
              />
              <h2 className={styles.collectionTitle}>{collection.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
