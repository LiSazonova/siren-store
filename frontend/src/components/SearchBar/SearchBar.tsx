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

// interface SearchResult {
//   id: number;
//   slug: string;
//   name: string;
//   type: 'collection' | 'product';
// }

// const SearchBar: React.FC<SearchBarProps> = ({
//   isDesktop = false,
//   isSearchOpen = false,
//   onOpen,
//   onClose,
// }) => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState<SearchResult[]>([]);
//   const router = useRouter();

//   const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value.toLowerCase();
//     setQuery(value);

//     if (value) {
//       try {
//         const collectionsResponse = await fetch(
//           'https://siren-store.onrender.com/api/collections'
//         );
//         const productsResponse = await fetch(
//           'https://siren-store.onrender.com/api/products'
//         );

//         const collectionsData = await collectionsResponse.json();
//         const productsData = await productsResponse.json();

//         const filteredCollections = collectionsData.data
//           .filter((item: any) => item.title.toLowerCase().includes(value))
//           .map((item: any) => ({
//             id: item.id,
//             slug: item.slug,
//             name: item.title,
//             type: 'collection',
//           }));

//         const filteredProducts = productsData.data
//           .filter((item: any) => item.name.toLowerCase().includes(value))
//           .map((item: any) => ({
//             id: item.id,
//             slug: item.slug,
//             name: item.name,
//             type: 'product',
//           }));

//         setResults([...filteredCollections, ...filteredProducts]);
//       } catch (error) {
//         console.error('Ошибка при поиске:', error);
//         setResults([]);
//       }
//     } else {
//       setResults([]);
//     }
//   };

//   const handleResultClick = (slug: string, type: 'collection' | 'product') => {
//     if (type === 'collection') {
//       router.push(`/collections/${slug}`);
//     } else {
//       router.push(`/products/${slug}`);
//     }
//     setQuery('');
//     setResults([]);
//     if (onClose) onClose();
//   };

//   if (isDesktop) {
//     return (
//       <div className={styles.searchContainer}>
//         <div className={styles.searchBar}>
//           <input
//             type="text"
//             placeholder="Пошук"
//             className={styles.searchInput}
//             value={query}
//             onChange={handleSearch}
//           />
//           <Icon
//             name="search_grey"
//             className={styles.searchIcon}
//             width={25}
//             height={24}
//             alt="Search Icon"
//           />
//         </div>
//         {results.length > 0 && (
//           <div className={styles.dropdownMenu}>
//             {results.map((result) => (
//               <div
//                 key={result.id}
//                 className={styles.dropdownItem}
//                 onClick={() => handleResultClick(result.slug, result.type)}
//               >
//                 {result.name}
//               </div>
//             ))}
//           </div>
//         )}
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
//             value={query}
//             onChange={handleSearch}
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
//         {results.length > 0 && (
//           <div className={styles.dropdownMenu}>
//             {results.map((result) => (
//               <div
//                 key={result.id}
//                 className={styles.dropdownItem}
//                 onClick={() => handleResultClick(result.slug, result.type)}
//               >
//                 {result.name}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
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

interface SearchResult {
  id: number;
  slug: string;
  name: string;
  type: 'collection' | 'product';
}

const SearchBar: React.FC<SearchBarProps> = ({
  isDesktop = false,
  isSearchOpen = false,
  onOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const router = useRouter();

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);

    if (value) {
      try {
        const collectionsResponse = await fetch(
          'https://siren-store.onrender.com/api/collections'
        );
        const productsResponse = await fetch(
          'https://siren-store.onrender.com/api/products'
        );

        const collectionsData = await collectionsResponse.json();
        const productsData = await productsResponse.json();

        const filteredCollections = collectionsData.data
          .filter((item: any) => item.title.toLowerCase().includes(value))
          .map((item: any) => ({
            id: item.id,
            slug: item.slug,
            name: item.title,
            type: 'collection',
          }));

        const filteredProducts = productsData.data
          .filter((item: any) => item.name.toLowerCase().includes(value))
          .map((item: any) => ({
            id: item.id,
            slug: item.slug,
            name: item.name,
            type: 'product',
          }));

        setResults([...filteredCollections, ...filteredProducts]);
      } catch (error) {
        console.error('Ошибка при поиске:', error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (slug: string, type: 'collection' | 'product') => {
    if (type === 'collection') {
      router.push(`/collections/${slug}`);
    } else {
      router.push(`/products/${slug}`);
    }
    setQuery('');
    setResults([]);
    if (onClose) onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (results.length > 0) {
        const firstResult = results[0];
        handleResultClick(firstResult.slug, firstResult.type);
      } else {
        router.push('/not-found');
        setQuery('');
        setResults([]);
      }
    }
  };

  if (isDesktop) {
    return (
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Пошук"
            className={styles.searchInput}
            value={query}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
          <Icon
            name="search_grey"
            className={styles.searchIcon}
            width={25}
            height={24}
            alt="Search Icon"
          />
        </div>
        {results.length > 0 && (
          <div className={styles.dropdownMenu}>
            {results.map((result) => (
              <div
                key={result.id}
                className={styles.dropdownItem}
                onClick={() => handleResultClick(result.slug, result.type)}
              >
                {result.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (!isSearchOpen) {
    return (
      <button
        onClick={onOpen}
        aria-label="Search Icon"
        className={styles.searchButton}
      >
        <Icon name="search" width={25} height={24} alt="Search Icon" />
      </button>
    );
  } else {
    return (
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Пошук"
            className={styles.searchInput}
            value={query}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
          <Icon
            name="search_grey"
            className={styles.searchIcon}
            width={25}
            height={24}
            alt="Search Icon"
          />
        </div>
        <button
          onClick={onClose}
          aria-label="Close Search"
          className={styles.closeButton}
        >
          <Icon name="close" width={25} height={24} alt="Close Icon" />
        </button>
        {results.length > 0 && (
          <div className={styles.dropdownMenu}>
            {results.map((result) => (
              <div
                key={result.id}
                className={styles.dropdownItem}
                onClick={() => handleResultClick(result.slug, result.type)}
              >
                {result.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
};

export default SearchBar;
