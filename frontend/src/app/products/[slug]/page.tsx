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
  image: string; // Добавлено для хранения пути изображения
}

async function fetchProduct(slug: string): Promise<Product> {
  const API_BASE_URL = 'https://siren-store.onrender.com';

  try {
    const res = await fetch(`${API_BASE_URL}/products/${slug}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.status}`);
    }

    const data = await res.json();

    return {
      id: data._id,
      name: data.name,
      description: data.description,
      price: Number(data.price),
      sizes: data.sizes || [],
      slug: data.slug,
      image: data.image || `/images/products/${data.slug}/${data.slug}.jpg`,
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

const ProductPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { cartItems, addToCart } = useCart(); // Использование состояния корзины
  const router = useRouter();

  // Логирование содержимого корзины
  useEffect(() => {
    console.log('Current cart items:', cartItems);
  }, [cartItems]);

  // Загрузка данных продукта
  useEffect(() => {
    fetchProduct(params.slug)
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error('Error fetching product:', error);
        toast.error('Не вдалося завантажити продукт. Спробуйте пізніше.');
        setProduct(null);
      });
  }, [params.slug]);

  // Проверка на отсутствие данных продукта
  if (!product) {
    return <p>Загрузка...</p>;
  }

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
            src={product.image}
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
