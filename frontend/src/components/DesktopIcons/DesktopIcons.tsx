import React from 'react';
import Icon from '../Icon/Icon';
import styles from './DesktopIcons.module.css';

interface DesktopIconsProps {
  onUserClick: () => void;
}

const DesktopIcons: React.FC<DesktopIconsProps> = ({ onUserClick }) => (
  <div className={styles.desktopIcons}>
    <Icon name="inst" width={24} height={24} alt="Instagram" />
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
