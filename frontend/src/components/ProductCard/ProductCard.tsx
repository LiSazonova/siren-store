import React from 'react';
import styles from '../../app/collections/[collectionId]/CollectionPage.module.css';
import ProductImage from '../ProductImage/ProductImage';
import AddToCartButton from '../AddToCardButton/AddToCardButton';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
        <ProductImage src={product.image} alt={product.name} />
        <AddToCartButton />
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productPrice}>{product.price} грн</p>
      </div>
    </div>
  );
};

export default ProductCard;
