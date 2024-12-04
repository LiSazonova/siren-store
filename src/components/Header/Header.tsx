'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon/Icon';
import styles from '@/components/Header/Header.module.css';
import Image from 'next/image';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => setIsSearchOpen(true);
  const handleSearchClose = () => setIsSearchOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo/logo.svg"
            alt="Siren Store"
            width={52}
            height={78}
          />
        </Link>

        {/* Навигация для десктопа */}
        <nav className={`${styles.menu} ${styles.desktopOnly}`}>
          <Link href="/" className={styles['menu-item']}>
            Головна
          </Link>
          <Link href="/collections" className={styles['menu-item']}>
            Колекції
          </Link>
          <Link href="/about-us" className={styles['menu-item']}>
            Про нас
          </Link>
        </nav>

        {/* Поисковая строка */}
        <div
          className={`${styles.searchContainer} ${
            isSearchOpen ? styles.searchActive : ''
          }`}
        >
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
          {isSearchOpen && (
            <button
              onClick={handleSearchClose}
              aria-label="Close Search"
              className={styles.closeButton}
            >
              <Icon name="close" size={24} alt="Close Icon" />
            </button>
          )}
        </div>

        {/* Иконки */}
        {!isSearchOpen && (
          <div className={styles.icons}>
            <button onClick={handleSearchOpen} aria-label="Search Icon">
              <Icon name="search" size={24} />
            </button>
            <button aria-label="Instagram">
              <Icon name="inst" size={24} />
            </button>
            <button aria-label="Basket">
              <Icon name="basket" size={24} />
            </button>
            <button aria-label="Menu" className={styles.menuButton}>
              <Icon name="menu" size={24} />
            </button>
          </div>
        )}

        {/* Десктоп: Дополнительные иконки */}
        <div className={`${styles.icons} ${styles.desktopOnly}`}>
          <Icon name="inst" size={24} />
          <Icon name="basket" size={24} />
          <Icon name="user" size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
