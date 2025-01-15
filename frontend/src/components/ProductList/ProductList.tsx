import React from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './ProductList.module.css';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // Цена как число
  description: string;
  image: string;
}

interface ProductListProps {
  products: Product[]; // Список продуктов, включая 'image'
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return <p className={styles.empty}>Нет доступных продуктов.</p>;
  }

  return (
    <div className={styles.productsGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
