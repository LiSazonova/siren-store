import React from 'react';
import Image from 'next/image';
import Icon from '@/components/Icon/Icon';
import styles from './ProductCard.module.css';

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

  return (
    <div
      className={styles.productCard}
      onClick={() => console.log(`Клик на продукте: ${product.name}`)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) =>
        e.key === 'Enter' && console.log(`Enter на продукте: ${product.name}`)
      }
    >
      <div className={styles.imageWrapper}>
        <Image
          src={imagePath}
          alt={product.name}
          width={292}
          height={374}
          className={styles.productImage}
        />
        <button className={styles.addToCart}>
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
