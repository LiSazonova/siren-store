'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './MobileMenu.module.css';
import { usePathname } from 'next/navigation';
import Icon from '../Icon/Icon';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const MobileMenu: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMobileMenuToggle = (event: React.MouseEvent): void => {
    event.stopPropagation();
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    router.push('/');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleMobileMenuToggle}
        aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        className={styles.menuButton}
      >
        <Icon
          name={isMobileMenuOpen ? 'close' : 'menu'}
          width={24}
          height={24}
          alt={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        />
      </button>

      {isMobileMenuOpen && (
        <nav
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
          ref={menuRef}
        >
          <div className={styles.mobileMenuContainer}>
            <Link
              href="/"
              className={`${styles.mobileMenuItem} ${isActive('/') ? styles.active : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Головна
            </Link>
            <Link
              href="/collections"
              className={`${styles.mobileMenuItem} ${isActive('/collections') ? styles.active : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Колекції
            </Link>
            <Link
              href="/about"
              className={`${styles.mobileMenuItem} ${isActive('/about-us') ? styles.active : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Про нас
            </Link>

            <div className={`${styles.mobileMenuItem} ${styles.authLinks}`}>
              {user ? (
                <button onClick={handleLogout} className={styles.authButton}>
                  Вийти
                </button>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={styles.authLink}
                  >
                    Вхід
                  </Link>
                  <Link
                    href="/auth/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={styles.authLink}
                  >
                    Реєстрація
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileMenu;
