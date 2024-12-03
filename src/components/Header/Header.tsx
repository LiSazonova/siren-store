import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <Link href="/">
          <div className={styles.logo}>
            <Image
              src="/images/logo/logo.svg"
              alt="Siren Store"
              width={52}
              height={78}
            />
          </div>
        </Link>

        {/* Иконки */}
        <div className={styles.icons}>
          <button aria-label="Search">
            <Image
              src="/images/icons/search.svg"
              alt="Search"
              width={24}
              height={24}
            />
          </button>
          <button aria-label="Instagram">
            <Image
              src="/images/icons/inst.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </button>
          <button aria-label="Cart">
            <Image
              src="/images/icons/basket.svg"
              alt="Cart"
              width={24}
              height={24}
            />
          </button>
          <button aria-label="Menu">
            <Image
              src="/images/icons/menu.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
