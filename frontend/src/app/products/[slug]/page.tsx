'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './ProductPage.module.css';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-toastify';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  sizes: string[];
  slug: string;
}

async function fetchProduct(slug: string): Promise<Product> {
  const res = await fetch(
    `https://siren-store.onrender.com/api/products?filters[slug][$eq]=${slug}&populate=*`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  const data = await res.json();
  const product = data.data[0];

  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: Number(product.price),
    sizes: product.sizes,
    slug: product.slug,
  };
}

const ProductPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { cartItems, addToCart } = useCart(); // Проверяем состояние корзины
  const router = useRouter();

  useEffect(() => {
    console.log('Current cart items:', cartItems); // Отображаем содержимое корзины
  }, [cartItems]);

  useEffect(() => {
    fetchProduct(params.slug)
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [params.slug]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const imagePath = `/images/products/${product.slug}/${product.slug}.jpg`;

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast.error('Помилка: будь ласка, виберіть розмір перед покупкою!');
      return;
    }
    console.log('Adding item to cart and redirecting to /cart');
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: 1,
      slug: product.slug,
    });
    router.push('/cart');
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Помилка: виберіть розмір перед додаванням у корзину!');
      return;
    }
    console.log('Adding item to cart:', {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: 1,
      slug: product.slug,
    });
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: 1,
      slug: product.slug,
    });
    toast.success(`${product.name} додано у корзину!`);
  };

  return (
    <main className={styles.productPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>{product.name}</h1>
        <div className={styles.imageWrapper}>
          <Image
            src={imagePath}
            alt={product.name}
            width={600}
            height={800}
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.price}>{product.price} грн</p>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.sizes}>
            <h3 className={styles.sizesTitle}>Sizes</h3>
            <div className={styles.sizeOptions}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeButton} ${
                    selectedSize === size ? styles.selectedSize : ''
                  }`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.btns}>
            <button className={styles.buyButton} onClick={handleBuyNow}>
              КУПИТИ ЗАРАЗ
            </button>
            <button
              className={styles.addToCartButton}
              onClick={handleAddToCart}
            >
              В КОРЗИНУ
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
