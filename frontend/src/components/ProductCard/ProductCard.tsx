'use client';

import React from 'react';
import Image from 'next/image';
import Icon from '@/components/Icon/Icon';
import styles from './ProductCard.module.css';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-toastify';
import type { Product } from '@/services/firebase';

interface ProductCardProps {
  product: Product; // Полный объект продукта, включая 'image'
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addToCart({
      id: product.slug,
      name: product.name,
      price: product.price,
      size: 'S',
      quantity: 1,
      slug: product.slug,
    });

    toast.success('Товар добавлен в корзину!');
  };

  const handleNavigateToProduct = () => {
    window.location.href = `/products/${product.slug}`;
  };

  return (
    <div
      className={styles.productCard}
      role="button"
      onClick={handleNavigateToProduct}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={product.imageTitle} // Используем путь изображения
          alt={product.name}
          width={292}
          height={374}
          className={styles.productImage}
        />
        <button className={styles.addToCart} onClick={handleAddToCart}>
          <Icon name="basket" width={24} height={24} alt="Корзина" />
        </button>
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productPrice}>{product.price} грн</p>
      </div>
    </div>
  );
};

export default ProductCard;
