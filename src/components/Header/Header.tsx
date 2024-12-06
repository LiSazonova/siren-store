'use client';

import React, { useState } from 'react';
import styles from './Header.module.css';
import Logo from '@/components/Logo/Logo';
import DesktopMenu from '@/components/DesktopMenu/Desktop';
import SearchBar from '@/components/SearchBar/SearchBar';
import Icons from '@/components/Icons/Icons';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import DesktopIcons from '@/components/DesktopIcons/DesktopIcons';

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => setIsSearchOpen(true);
  const handleSearchClose = () => setIsSearchOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.desktopOnly}>
          <Logo />
          <DesktopMenu />
          <SearchBar isDesktop={true} />
          <DesktopIcons />
        </div>
        <div className={styles.mobileOnly}>
          <Logo />
          <SearchBar
            isDesktop={false}
            isSearchOpen={isSearchOpen}
            onOpen={handleSearchOpen}
            onClose={handleSearchClose}
          />
          {!isSearchOpen && (
            <>
              <Icons />
              <MobileMenu />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
