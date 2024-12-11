'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './MobileMenu.module.css';
import { usePathname } from 'next/navigation';
import Icon from '../Icon/Icon';

const MobileMenu: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMobileMenuToggle = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  return (
    <>
      <button
        onClick={handleMobileMenuToggle}
        aria-label="Menu"
        className={styles.menuButton}
      >
        <Icon
          name={isMobileMenuOpen ? 'close' : 'menu'}
          width={24}
          height={24}
        />
      </button>

      <nav
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
      >
        <div className={styles.mobileMenuContainer}>
          <Link
            href="/"
            className={`${styles.mobileMenuItem} ${isActive('/') ? styles.active : ''}`}
            onClick={handleMobileMenuToggle}
          >
            Головна
          </Link>
          <Link
            href="/about-us"
            className={`${styles.mobileMenuItem} ${isActive('/about-us') ? styles.active : ''}`}
            onClick={handleMobileMenuToggle}
          >
            Про нас
          </Link>
          <Link
            href="/collections"
            className={`${styles.mobileMenuItem} ${isActive('/collections') ? styles.active : ''}`}
            onClick={handleMobileMenuToggle}
          >
            Колекції
          </Link>
          <div className={`${styles.mobileMenuItem} ${styles.authLinks}`}>
            <Link
              href="/login"
              onClick={handleMobileMenuToggle}
              className={styles.authLink}
            >
              Вхід
            </Link>
            <Link
              href="/register"
              onClick={handleMobileMenuToggle}
              className={styles.authLink}
            >
              Регістрація
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
