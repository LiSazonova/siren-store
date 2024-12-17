import React from 'react';
import Image from 'next/image';
import styles from './Icon.module.css';

interface IconProps {
  name: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  width,
  height,
  alt,
  className,
  onClick,
}) => (
  <div
    className={`${styles.iconContainer} ${className || ''}`}
    onClick={onClick}
    role="button"
    aria-label={alt || name}
    tabIndex={0}
    onKeyPress={(e) => {
      if (e.key === 'Enter') onClick?.();
    }}
  >
    <Image
      src={`/images/icons/${name}.svg`}
      alt={alt || name}
      width={width}
      height={height}
    />
  </div>
);

export default Icon;
