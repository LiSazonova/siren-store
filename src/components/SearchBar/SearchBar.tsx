import React from 'react';
import Icon from '@/components/Icon/Icon';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  isDesktop?: boolean;
  isSearchOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  isDesktop = false,
  isSearchOpen = false,
  onOpen,
  onClose,
}) => {
  if (isDesktop) {
    return (
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Пошук"
            className={styles.searchInput}
          />
          <Icon
            name="search_grey"
            className={styles.searchIcon}
            size={20}
            alt="Search Icon"
          />
        </div>
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
        <Icon name="search" size={24} />
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
          />
          <Icon
            name="search_grey"
            className={styles.searchIcon}
            size={20}
            alt="Search Icon"
          />
        </div>
        <button
          onClick={onClose}
          aria-label="Close Search"
          className={styles.closeButton}
        >
          <Icon name="close" size={24} alt="Close Icon" />
        </button>
      </div>
    );
  }
};

export default SearchBar;
