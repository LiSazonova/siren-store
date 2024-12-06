import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.css';

const Logo: React.FC = () => (
  <Link href="/" className={styles.logo}>
    <Image
      src="/images/logo/logo.svg"
      alt="Siren Store"
      width={52}
      height={78}
      priority
    />
  </Link>
);

export default Logo;
