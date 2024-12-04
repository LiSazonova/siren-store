'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon/Icon';
import styles from './header.module.css';
import Image from 'next/image';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => setIsSearchOpen(true);
  const handleSearchClose = () => setIsSearchOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo/logo.svg"
            alt="Siren Store"
            width={52}
            height={78}
          />
        </Link>

        {isSearchOpen ? (
          <>
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
              onClick={handleSearchClose}
              aria-label="Close Search"
              className={styles.closeButton}
            >
              <Icon name="close" size={24} alt="Close Icon" />
            </button>
          </>
        ) : (
          <div className={styles.icons}>
            <button onClick={handleSearchOpen} aria-label="Search Icon">
              <Icon name="search" size={24} />
            </button>
            <button aria-label="Instagram">
              <Icon name="menu" size={24} />
            </button>
            <button aria-label="Basket">
              <Icon name="basket" size={24} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
