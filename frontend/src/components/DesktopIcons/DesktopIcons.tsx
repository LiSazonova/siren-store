import Icon from '../Icon/Icon';
import styles from './DesktopIcons.module.css';

const DesktopIcons: React.FC = () => (
  <div className={styles.desktopIcons}>
    <Icon name="inst" width={24} height={24} />
    <Icon name="basket" width={24} height={24} />
    <Icon name="user" width={24} height={24} />
  </div>
);

export default DesktopIcons;
