import Icon from '../Icon/Icon';
import styles from './DesktopIcons.module.css';

const DesktopIcons: React.FC = () => (
  <div className={styles.desktopIcons}>
    <Icon name="inst" size={24} />
    <Icon name="basket" size={24} />
    <Icon name="user" size={24} />
  </div>
);

export default DesktopIcons;
