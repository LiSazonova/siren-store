import React from 'react';
import Icon from '../Icon/Icon';
import styles from './DesktopIcons.module.css';

interface DesktopIconsProps {
  onUserClick: () => void;
}

const DesktopIcons: React.FC<DesktopIconsProps> = ({ onUserClick }) => (
  <div className={styles.desktopIcons}>
    <a
      href="https://www.instagram.com/__the_siren__official_/profilecard/?igsh=MTA5OWE4d3luaXA2eg=="
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="inst" width={24} height={24} alt="Instagram" />
    </a>
    <Icon name="basket" width={24} height={24} alt="Корзина" />
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
