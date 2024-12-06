import Image from 'next/image';

interface IconProps {
  name: string;
  size: number;
  alt?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size, alt, className }) => (
  <Image
    src={`images/icons/${name}.svg`}
    alt={alt || name}
    width={size}
    height={size}
    className={className}
  />
);

export default Icon;
