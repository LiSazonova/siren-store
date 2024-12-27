'use client';

import React from 'react';
import Image from 'next/image';
import Icon from '@/components/Icon/Icon';
import styles from './ProductCard.module.css';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-toastify';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: 'S', // Размер по умолчанию
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
          src={`/images/products/${product.slug}/${product.slug}.jpg`}
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
