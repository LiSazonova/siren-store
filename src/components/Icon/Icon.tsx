import Image from 'next/image';
import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  alt?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = '',
  alt = '',
}) => {
  return (
    <Image
      src={`/images/icons/${name}.svg`}
      alt={alt || name}
      width={size}
      height={size}
      className={className}
    />
  );
};

export default Icon;
