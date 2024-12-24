import React from 'react';
import Image from 'next/image';
import Icon from '@/components/Icon/Icon';
import styles from './ProductCard.module.css';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const imagePath = `/images/products/${product.slug}/${product.slug}.jpg`;

  const { addToCart } = useCart();
  const router = useRouter();

  const handleNavigateToProduct = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).tagName !== 'BUTTON') {
      router.push(`/products/${product.slug}`);
    }
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addToCart();
  };

  return (
    <div className={styles.productCard}>
      <div
        className={styles.imageWrapper}
        onClick={handleNavigateToProduct}
        role="button"
        tabIndex={0}
        onKeyPress={(e) =>
          e.key === 'Enter' && handleNavigateToProduct(e as any)
        }
      >
        <Image
          src={imagePath}
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
