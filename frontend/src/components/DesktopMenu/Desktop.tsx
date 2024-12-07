import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Desktop.module.css';

const DesktopMenu: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={styles.menu}>
      <Link
        href="/"
        className={`${styles.menuItem} ${isActive('/') ? styles.active : ''}`}
      >
        Головна
      </Link>
      <Link
        href="/collections"
        className={`${styles.menuItem} ${isActive('/collections') ? styles.active : ''}`}
      >
        Колекції
      </Link>
      <Link
        href="/about-us"
        className={`${styles.menuItem} ${isActive('/about-us') ? styles.active : ''}`}
      >
        Про нас
      </Link>
    </nav>
  );
};

export default DesktopMenu;
