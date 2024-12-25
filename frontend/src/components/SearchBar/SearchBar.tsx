// import React from 'react';
// import styles from './SearchBar.module.css';
// import Icon from '../Icon/Icon';

// interface SearchBarProps {
//   isDesktop?: boolean;
//   isSearchOpen?: boolean;
//   onOpen?: () => void;
//   onClose?: () => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({
//   isDesktop = false,
//   isSearchOpen = false,
//   onOpen,
//   onClose,
// }) => {
//   if (isDesktop) {
//     return (
//       <div className={styles.searchContainer}>
//         <div className={styles.searchBar}>
//           <input
//             type="text"
//             placeholder="Пошук"
//             className={styles.searchInput}
//           />
//           <Icon
//             name="search_grey"
//             className={styles.searchIcon}
//             width={25}
//             height={24}
//             alt="Search Icon"
//           />
//         </div>
//       </div>
//     );
//   }

//   if (!isSearchOpen) {
//     return (
//       <button
//         onClick={onOpen}
//         aria-label="Search Icon"
//         className={styles.searchButton}
//       >
//         <Icon name="search" width={25} height={24} alt="Search Icon" />
//       </button>
//     );
//   } else {
//     return (
//       <div className={styles.searchContainer}>
//         <div className={styles.searchBar}>
//           <input
//             type="text"
//             placeholder="Пошук"
//             className={styles.searchInput}
//           />
//           <Icon
//             name="search_grey"
//             className={styles.searchIcon}
//             width={25}
//             height={24}
//             alt="Search Icon"
//           />
//         </div>
//         <button
//           onClick={onClose}
//           aria-label="Close Search"
//           className={styles.closeButton}
//         >
//           <Icon name="close" width={25} height={24} alt="Close Icon" />
//         </button>
//       </div>
//     );
//   }
// };

// export default SearchBar;

// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import styles from './SearchBar.module.css';
// import Icon from '../Icon/Icon';

// interface SearchBarProps {
//   isDesktop?: boolean;
//   isSearchOpen?: boolean;
//   onOpen?: () => void;
//   onClose?: () => void;
// }

// const SearchBar: React.FC<SearchBarProps> = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSearch = async () => {
//     if (searchTerm.trim() === '') return;

//     const formattedTerm = searchTerm.trim().toLowerCase();
//     setLoading(true);

//     try {
//       // Запрос к API для получения коллекций и продуктов
//       const [collectionsRes, productsRes] = await Promise.all([
//         fetch(`https://siren-store.onrender.com/api/collections`),
//         fetch(`https://siren-store.onrender.com/api/products`),
//       ]);

//       if (!collectionsRes.ok || !productsRes.ok) {
//         throw new Error('Ошибка загрузки данных');
//       }

//       const collectionsData = await collectionsRes.json();
//       const productsData = await productsRes.json();

//       // Обрабатываем данные коллекций
//       const collections = collectionsData.data.map((collection: any) => {
//         const slug = collection.slug?.toLowerCase();
//         if (!slug) {
//           console.warn('Коллекция без slug:', collection);
//         }
//         return { slug, title: collection.title?.toLowerCase() };
//       });

//       // Обрабатываем данные продуктов
//       const products = productsData.data.map((product: any) => {
//         const slug = product.slug?.toLowerCase();
//         if (!slug) {
//           console.warn('Продукт без slug:', product);
//         }
//         return { slug, name: product.name?.toLowerCase() };
//       });

//       console.log('Processed Collections:', collections);
//       console.log('Processed Products:', products);

//       // Поиск совпадений
//       const collection = collections.find(
//         (col: any) =>
//           col.slug === formattedTerm || col.title?.includes(formattedTerm)
//       );
//       const product = products.find(
//         (prod: any) =>
//           prod.slug === formattedTerm || prod.name?.includes(formattedTerm)
//       );

//       // Переходы на нужные страницы
//       if (collection) {
//         router.push(`/collections/${collection.slug}`);
//       } else if (product) {
//         router.push(`/products/${product.slug}`);
//       } else {
//         router.push('/not-found'); // Страница "не знайдено"
//       }
//     } catch (error) {
//       console.error('Ошибка при выполнении поиска:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={styles.searchContainer}>
//       <div className={styles.searchBar}>
//         <input
//           type="text"
//           placeholder="Пошук"
//           className={styles.searchInput}
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') handleSearch();
//           }}
//         />
//         <button
//           className={styles.searchIcon}
//           onClick={handleSearch}
//           disabled={loading}
//           aria-label="Search Icon"
//         >
//           <Icon name="search_grey" width={25} height={24} alt="Search Icon" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import styles from './SearchBar.module.css';
// import Icon from '../Icon/Icon';
// import { useRouter } from 'next/navigation';

// interface SearchBarProps {
//   isDesktop?: boolean;
//   isSearchOpen?: boolean;
//   onOpen?: () => void;
//   onClose?: () => void;
// }

// interface Collection {
//   id: number;
//   slug: string;
//   title: string;
// }

// interface Product {
//   id: number;
//   slug: string;
//   name: string;
// }

// const SearchBar: React.FC<SearchBarProps> = () => {
//   const [query, setQuery] = useState('');
//   const [collections, setCollections] = useState<Collection[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredResults, setFilteredResults] = useState<
//     (Collection | Product)[]
//   >([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const router = useRouter();

//   // Fetch collections and products data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const collectionsResponse = await fetch(
//           'https://siren-store.onrender.com/api/collections'
//         );
//         const productsResponse = await fetch(
//           'https://siren-store.onrender.com/api/products'
//         );

//         const collectionsData = await collectionsResponse.json();
//         const productsData = await productsResponse.json();

//         setCollections(
//           collectionsData.data.map((item: any) => ({
//             id: item.id,
//             slug: item.slug,
//             title: item.title,
//           }))
//         );

//         setProducts(
//           productsData.data.map((item: any) => ({
//             id: item.id,
//             slug: item.slug,
//             name: item.name,
//           }))
//         );
//       } catch (error) {
//         console.error('Ошибка загрузки данных:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value.toLowerCase();
//     setQuery(value);

//     if (value) {
//       const results = [
//         ...collections.filter((collection) =>
//           collection.title.toLowerCase().includes(value)
//         ),
//         ...products.filter((product) =>
//           product.name.toLowerCase().includes(value)
//         ),
//       ];
//       setFilteredResults(results);
//       setShowDropdown(true);
//     } else {
//       setFilteredResults([]);
//       setShowDropdown(false);
//     }
//   };

//   const handleResultClick = (slug: string, isCollection: boolean) => {
//     setQuery(''); // Clear the search query
//     setShowDropdown(false); // Hide the dropdown
//     if (isCollection) {
//       router.push(`/collections/${slug}`);
//     } else {
//       router.push(`/products/${slug}`);
//     }
//   };

//   return (
//     <div className={styles.searchContainer}>
//       <div className={styles.searchBar}>
//         <input
//           type="text"
//           placeholder="Пошук"
//           className={styles.searchInput}
//           value={query}
//           onChange={handleSearch}
//         />
//         <Icon
//           name="search_grey"
//           className={styles.searchIcon}
//           width={25}
//           height={24}
//           alt="Search Icon"
//         />
//       </div>

//       {/* Dropdown results */}
//       {showDropdown && (
//         <div className={styles.dropdownMenu}>
//           {filteredResults.length > 0 ? (
//             filteredResults.map((item) => (
//               <div
//                 key={item.id}
//                 className={styles.dropdownItem}
//                 onClick={() =>
//                   handleResultClick(
//                     item.slug,
//                     'title' in item // Check if it's a collection or product
//                   )
//                 }
//               >
//                 {'title' in item ? item.title : item.name}
//               </div>
//             ))
//           ) : (
//             <p className={styles.noResults}>Ничего не найдено</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import styles from './SearchBar.module.css';
// import Icon from '../Icon/Icon';
// import { useRouter } from 'next/navigation';

// interface SearchBarProps {
//   isDesktop?: boolean;
//   isSearchOpen?: boolean;
//   onOpen?: () => void;
//   onClose?: () => void;
// }

// interface Collection {
//   id: number;
//   slug: string;
//   title: string;
// }

// interface Product {
//   id: number;
//   slug: string;
//   name: string;
// }

// const SearchBar: React.FC<SearchBarProps> = () => {
//   const [query, setQuery] = useState('');
//   const [collections, setCollections] = useState<Collection[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredResults, setFilteredResults] = useState<
//     (Collection | Product)[]
//   >([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   const router = useRouter();

//   // Fetch collections and products data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const collectionsResponse = await fetch(
//           'https://siren-store.onrender.com/api/collections'
//         );
//         const productsResponse = await fetch(
//           'https://siren-store.onrender.com/api/products'
//         );

//         const collectionsData = await collectionsResponse.json();
//         const productsData = await productsResponse.json();

//         setCollections(
//           collectionsData.data.map((item: any) => ({
//             id: item.id,
//             slug: item.slug,
//             title: item.title,
//           }))
//         );

//         setProducts(
//           productsData.data.map((item: any) => ({
//             id: item.id,
//             slug: item.slug,
//             name: item.name,
//           }))
//         );
//       } catch (error) {
//         console.error('Ошибка загрузки данных:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value.toLowerCase();
//     setQuery(value);

//     if (value) {
//       const results = [
//         ...collections.filter((collection) =>
//           collection.title.toLowerCase().includes(value)
//         ),
//         ...products.filter((product) =>
//           product.name.toLowerCase().includes(value)
//         ),
//       ];
//       setFilteredResults(results);
//       setShowDropdown(true);
//     } else {
//       setFilteredResults([]);
//       setShowDropdown(false);
//     }
//   };

//   const handleResultClick = (slug: string, isCollection: boolean) => {
//     setQuery(''); // Clear the search query
//     setShowDropdown(false); // Hide the dropdown
//     if (isCollection) {
//       router.push(`/collections/${slug}`);
//     } else {
//       router.push(`/products/${slug}`);
//     }
//   };

//   const handleNotFound = () => {
//     setShowDropdown(false);
//     setQuery('');
//     router.push('/not-found');
//   };

//   return (
//     <div
//       className={`${styles.searchContainer} ${isFocused ? styles.active : ''}`}
//     >
//       <div className={styles.searchBar}>
//         <input
//           type="text"
//           placeholder="Пошук"
//           className={styles.searchInput}
//           value={query}
//           onChange={handleSearch}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//         />
//         <Icon
//           name="search_grey"
//           className={styles.searchIcon}
//           width={25}
//           height={24}
//           alt="Search Icon"
//         />
//       </div>

//       {/* Dropdown results */}
//       {showDropdown && (
//         <div className={styles.dropdownMenu}>
//           {filteredResults.length > 0 ? (
//             filteredResults.map((item) => (
//               <div
//                 key={item.id}
//                 className={styles.dropdownItem}
//                 onClick={() =>
//                   handleResultClick(
//                     item.slug,
//                     'title' in item // Check if it's a collection or product
//                   )
//                 }
//               >
//                 {'title' in item ? item.title : item.name}
//               </div>
//             ))
//           ) : (
//             <p className={styles.noResults} onClick={handleNotFound}>
//               Ничего не найдено
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

'use client';

import React, { useState, useEffect } from 'react';
import styles from './SearchBar.module.css';
import Icon from '../Icon/Icon';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  isDesktop?: boolean;
  isSearchOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

interface Collection {
  id: number;
  slug: string;
  title: string;
}

interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [query, setQuery] = useState('');
  const [collections, setCollections] = useState<Collection[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredResults, setFilteredResults] = useState<
    (Collection | Product)[]
  >([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  // Fetch collections and products data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionsResponse = await fetch(
          'https://siren-store.onrender.com/api/collections'
        );
        const productsResponse = await fetch(
          'https://siren-store.onrender.com/api/products'
        );

        const collectionsData = await collectionsResponse.json();
        const productsData = await productsResponse.json();

        setCollections(
          collectionsData.data.map((item: any) => ({
            id: item.id,
            slug: item.slug,
            title: item.title,
          }))
        );

        setProducts(
          productsData.data.map((item: any) => ({
            id: item.id,
            slug: item.slug,
            name: item.name,
            description: item.description,
            price: item.price,
          }))
        );
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);

    if (value) {
      const results = [
        ...collections.filter((collection) =>
          collection.title.toLowerCase().includes(value)
        ),
        ...products.filter(
          (product) =>
            product.name.toLowerCase().includes(value) ||
            product.description.toLowerCase().includes(value)
        ),
      ];
      setFilteredResults(results);
      setShowDropdown(true);
    } else {
      setFilteredResults([]);
      setShowDropdown(false);
    }
  };

  const handleResultClick = (slug: string, isCollection: boolean) => {
    setQuery(''); // Clear the search query
    setShowDropdown(false); // Hide the dropdown
    if (isCollection) {
      router.push(`/collections/${slug}`);
    } else {
      router.push(`/products/${slug}`);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Пошук"
          className={styles.searchInput}
          value={query}
          onChange={handleSearch}
        />
        <Icon
          name="search_grey"
          className={styles.searchIcon}
          width={25}
          height={24}
          alt="Search Icon"
        />
      </div>

      {/* Dropdown results */}
      {showDropdown && (
        <div className={styles.dropdownMenu}>
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <div
                key={item.id}
                className={styles.dropdownItem}
                onClick={() =>
                  handleResultClick(
                    item.slug,
                    'title' in item // Check if it's a collection or product
                  )
                }
              >
                {'title' in item ? item.title : `${item.name}`}
              </div>
            ))
          ) : (
            <p className={styles.noResults}>Ничего не найдено</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
