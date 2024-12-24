import React from 'react';
import Icon from '../Icon/Icon';
import styles from './DesktopIcons.module.css';
import Link from 'next/link';

interface DesktopIconsProps {
  onUserClick: () => void;
  onCartClick: () => void;
  cartItems: number; // Правильное имя пропса
}

const DesktopIcons: React.FC<DesktopIconsProps> = ({
  onUserClick,
  onCartClick,
  cartItems, // Используем правильное имя
}) => (
  <div className={styles.desktopIcons}>
    <Link
      href="https://www.instagram.com/__the_siren__official_/profilecard/?igsh=MTA5OWE4d3luaXA2eg=="
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="inst" width={24} height={24} alt="Instagram" />
    </Link>
    <div className={styles.cartWrapper} onClick={onCartClick}>
      <Icon name="basket" width={24} height={24} alt="Корзина" />
      {/* Используем cartItems для отображения количества */}
      {cartItems > 0 && <span className={styles.cartCount}>{cartItems}</span>}
    </div>
    <Icon
      name="user"
      width={24}
      height={24}
      alt="Пользователь"
      onClick={onUserClick}
    />
  </div>
);

export default DesktopIcons;
