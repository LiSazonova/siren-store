// components/ProductList/ProductList.tsx
import React from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './ProductList.module.css';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  description: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productsGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
