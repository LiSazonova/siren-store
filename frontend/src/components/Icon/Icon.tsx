import Image from 'next/image';

interface IconProps {
  name: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, width, height, alt, className }) => (
  <Image
    src={`images/icons/${name}.svg`}
    alt={alt || name}
    width={width}
    height={height}
    className={className}
  />
);

export default Icon;
