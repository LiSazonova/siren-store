import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './CollectionPage.module.css';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
}

const mockCollections: Collection[] = [
  {
    id: 'moon_crystal',
    title: 'MOON CRYSTAL',
    description: 'Описание коллекции MOON CRYSTAL.',
    image: '/images/products/moon_crystal.jpg',
  },
  {
    id: 'christmas_song',
    title: 'CHRISTMAS SONG',
    description: 'Описание коллекции CHRISTMAS SONG.',
    image: '/images/products/christmas_song.jpg',
  },
];

export async function generateStaticParams() {
  return mockCollections.map((collection) => ({
    collectionId: collection.id,
  }));
}

interface MyCollectionPageProps {
  params: {
    collectionId: string;
  };
}

const CollectionPage: React.FC<MyCollectionPageProps> = ({ params }) => {
  const { collectionId } = params;

  const collection = mockCollections.find((col) => col.id === collectionId);

  if (!collection) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{collection.title}</h1>
      <Image
        src={collection.image}
        alt={collection.title}
        width={292}
        height={500}
        className={styles.image}
      />
      <p className={styles.description}>{collection.description}</p>
    </main>
  );
};

export default CollectionPage;
