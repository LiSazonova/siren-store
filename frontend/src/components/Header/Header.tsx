'use client';

import React, { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import DesktopMenu from '../DesktopMenu/Desktop';
import SearchBar from '../SearchBar/SearchBar';
import DesktopIcons from '../DesktopIcons/DesktopIcons';
import Icons from '../Icons/Icons';
import MobileMenu from '../MobileMenu/MobileMenu';

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
          <div className={styles.mobileNav}>
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
      </div>
    </header>
  );
};

export default Header;
