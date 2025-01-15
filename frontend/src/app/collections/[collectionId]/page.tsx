'use client';

import React, { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList/ProductList';
import styles from './CollectionPage.module.css';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // Исправлено на number
  description: string;
  image: string;
}

async function fetchProducts(collectionSlug: string): Promise<Product[]> {
  const res = await fetch(
    `http://localhost:5000/api/products/${collectionSlug}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();

  return data.map((product: any) => ({
    id: product._id,
    name: product.name,
    slug: product.slug,
    price: product.price,
    description: product.description,
    image: product.image,
  }));
}

interface PageProps {
  params: {
    collectionId: string; // `collectionId` здесь используется как slug
  };
}

const CollectionPage: React.FC<PageProps> = ({ params }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts(params.collectionId);
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Ошибка при загрузке продуктов:', err);
        setError('Не удалось загрузить продукты. Попробуйте позже.');
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [params.collectionId]);

  const collectionTitles: { [key: string]: string } = {
    moon_crystal: 'Moon Crystal',
    christmas_song: 'Christmas Song',
  };

  const collectionOrders: { [key: string]: string[] } = {
    moon_crystal: [
      'mint_dress',
      'robe_emerald',
      'black_floral_dress',
      'blue_corset_dress',
      'purple_shine_dress',
      'blue_dress',
      'emerald',
      'set_purple_diamond',
      'black_naked_dress',
    ],
    christmas_song: [
      'blue_baloon',
      'white_corset_skirt_set',
      'purple_corset_short_dress',
      'white_dress_with_scarf',
    ],
  };

  const collectionTitle = collectionTitles[params.collectionId] || 'Коллекция';
  const customOrder = collectionOrders[params.collectionId] || [];

  const sortedProducts = products.sort((a, b) => {
    const orderA = customOrder.indexOf(a.slug);
    const orderB = customOrder.indexOf(b.slug);
    if (orderA === -1) return 1; // Если продукта нет в customOrder, он уходит в конец
    if (orderB === -1) return -1;
    return orderA - orderB;
  });

  if (isLoading) {
    return <p>Загрузка продуктов...</p>;
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{collectionTitle}</h1>
      <ProductList products={sortedProducts} />
    </main>
  );
};

export default CollectionPage;
