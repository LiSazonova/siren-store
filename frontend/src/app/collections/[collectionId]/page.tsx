// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import styles from './CollectionPage.module.css';
// import Icon from '@/components/Icon/Icon';

// interface Product {
//   id: number;
//   name: string;
//   slug: string;
//   price: string;
//   description: string;
//   image: string;
// }

// async function fetchProducts(collectionSlug: string): Promise<Product[]> {
//   const res = await fetch(
//     `https://siren-store.onrender.com/api/products?filters[collection][slug][$eq]=${collectionSlug}&populate=*`
//   );

//   if (!res.ok) {
//     throw new Error('Failed to fetch products');
//   }

//   const data = await res.json();

//   return data.data.map((product: any) => {
//     const image = product.images?.[0]?.url || '';
//     const imageUrl = image.startsWith('http')
//       ? image
//       : `https://siren-store.onrender.com${image}`;

//     return {
//       id: product.id,
//       name: product.name,
//       slug: product.slug,
//       price: product.price,
//       description: product.description,
//       image: imageUrl,
//     };
//   });
// }

// interface PageProps {
//   params: {
//     collectionId: string;
//   };
// }

// const CollectionPage: React.FC<PageProps> = ({ params }) => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function loadProducts() {
//       try {
//         const data = await fetchProducts(params.collectionId);
//         setProducts(data);
//       } catch (error) {
//         console.error('Ошибка при загрузке продуктов', error);
//       }
//     }

//     loadProducts();
//   }, [params.collectionId]);

//   const customOrder = [
//     'mint_dress',
//     'robe_emerald',
//     'black_floral_dress',
//     'blue_corset_dress',
//     'purple_shine_dress',
//     'blue_dress',
//     'emerald_dress',
//     'set_purple_diamond',
//     'black_naked_dress',
//   ];

//   const sortedProducts = products.sort(
//     (a, b) => customOrder.indexOf(a.slug) - customOrder.indexOf(b.slug)
//   );

//   return (
//     <main className={styles.main}>
//       <h1 className={styles.title}>Moon crystal</h1>
//       <div className={styles.productsGrid}>
//         {sortedProducts.map((product) => (
//           <div
//             key={product.id}
//             className={styles.productCard}
//             onClick={() => console.log(`Клик на продукте: ${product.name}`)}
//             role="button"
//             tabIndex={0}
//             onKeyPress={(e) =>
//               e.key === 'Enter' &&
//               console.log(`Enter на продукте: ${product.name}`)
//             }
//           >
//             <div className={styles.imageWrapper}>
//               {product.image && (
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={292}
//                   height={374}
//                   className={styles.productImage}
//                 />
//               )}
//               <button className={styles.addToCart}>
//                 <Icon name="basket" width={24} height={24} alt="Корзина" />
//               </button>
//             </div>
//             <div className={styles.productInfo}>
//               <h2 className={styles.productName}>{product.name}</h2>
//               <p className={styles.productPrice}>{product.price} грн</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default CollectionPage;

// 'use client';

// import React, { useEffect, useState } from 'react';
// import ProductCard from '@/components/ProductCard/ProductCard';
// import styles from './CollectionPage.module.css';
// import { fetchProducts } from '@/services/api';

// interface Product {
//   id: number;
//   name: string;
//   slug: string;
//   price: string;
//   description: string;
//   image: string;
// }

// interface PageProps {
//   params: {
//     collectionId: string;
//   };
// }

// const CollectionPage: React.FC<PageProps> = ({ params }) => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function loadProducts() {
//       try {
//         const data = await fetchProducts(params.collectionId);
//         setProducts(data);
//       } catch (error) {
//         console.error('Ошибка при загрузке продуктов', error);
//       }
//     }

//     loadProducts();
//   }, [params.collectionId]);

//   const customOrder = [
//     'mint_dress',
//     'robe_emerald',
//     'black_floral_dress',
//     'blue_corset_dress',
//     'purple_shine_dress',
//     'blue_dress',
//     'emerald_dress',
//     'set_purple_diamond',
//     'black_naked_dress',
//   ];

//   const sortedProducts = products.sort(
//     (a, b) => customOrder.indexOf(a.slug) - customOrder.indexOf(b.slug)
//   );

//   return (
//     <main className={styles.main}>
//       <h1 className={styles.title}>Moon crystal</h1>
//       <div className={styles.productsGrid}>
//         {sortedProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default CollectionPage;

// app/collections/[collectionId]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList/ProductList';
import styles from './CollectionPage.module.css';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  description: string;
}

async function fetchProducts(collectionSlug: string): Promise<Product[]> {
  const res = await fetch(
    `https://siren-store.onrender.com/api/products?filters[collection][slug][$eq]=${collectionSlug}&populate=*`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();

  return data.data.map((product: any) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    price: product.price,
    description: product.description,
  }));
}

interface PageProps {
  params: {
    collectionId: string;
  };
}

const CollectionPage: React.FC<PageProps> = ({ params }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts(params.collectionId);
        setProducts(data);
      } catch (error) {
        console.error('Ошибка при загрузке продуктов', error);
      }
    }

    loadProducts();
  }, [params.collectionId]);

  const customOrder = [
    'mint_dress',
    'robe_emerald',
    'black_floral_dress',
    'blue_corset_dress',
    'purple_shine_dress',
    'blue_dress',
    'emerald_dress',
    'set_purple_diamond',
    'black_naked_dress',
  ];

  const sortedProducts = products.sort(
    (a, b) => customOrder.indexOf(a.slug) - customOrder.indexOf(b.slug)
  );

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Moon crystal</h1>
      <ProductList products={sortedProducts} />
    </main>
  );
};

export default CollectionPage;
