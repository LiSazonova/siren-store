'use client';

import React, { createContext, useContext, useState } from 'react';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
}

interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Пример товара',
      slug: 'example_product',
      price: 500,
      description: 'Описание товара',
    },
    {
      id: 2,
      name: 'Второй товар',
      slug: 'second_product',
      price: 700,
      description: 'Еще один пример товара',
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
