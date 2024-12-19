import React from 'react';
import Icon from '@/components/Icon/Icon';
import styles from '../../app/collections/[collectionId]/CollectionPage.module.css';

const AddToCartButton: React.FC = () => {
  return (
    <button className={styles.addToCart}>
      <Icon name="basket" width={24} height={24} alt="Корзина" />
    </button>
  );
};

export default AddToCartButton;
