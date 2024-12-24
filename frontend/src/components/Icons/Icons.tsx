import React from 'react';
import Icon from '../Icon/Icon';
import styles from './Icons.module.css';
import Link from 'next/link';

interface IconsProps {
  onCartClick: () => void;
  cartCount: number;
}

const Icons: React.FC<IconsProps> = ({ onCartClick, cartCount }) => (
  <div className={styles.icons}>
    <Link
      href="https://www.instagram.com/__the_siren__official_/profilecard/?igsh=MTA5OWE4d3luaXA2eg=="
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="inst" width={24} height={24} alt="Instagram" />
    </Link>
    <div className={styles.cartWrapper} onClick={onCartClick}>
      <Icon name="basket" width={24} height={24} alt="Корзина" />
      {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
    </div>
  </div>
);

export default Icons;
