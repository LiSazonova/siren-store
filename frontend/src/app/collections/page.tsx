import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Collections.module.css';

export default function CollectionsPage() {
  const collections = [
    {
      title: 'MOON CRYSTAL',
      image: '/images/products/moon_crystal.jpg',
      slug: 'moon_crystal', // Используем slug вместо href
    },
    {
      title: 'CHRISTMAS SONG',
      image: '/images/products/christmas_song.jpg',
      slug: 'christmas_song', // Используем slug вместо href
    },
  ];

  return (
    <main>
      <section className={styles.collectionsPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>КОЛЕКЦІЇ</h1>
          <div className={styles.collections}>
            {collections.map((collection) => (
              <div key={collection.slug} className={styles.collection}>
                <Link href={`/collections/${collection.slug}`}>
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
        </div>
      </section>
    </main>
  );
}
