import React from 'react';
import Image from 'next/image';
import styles from '../../app/collections/[collectionId]/CollectionPage.module.css';

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={292}
      height={374}
      className={styles.productImage}
    />
  );
};
export default ProductImage;
