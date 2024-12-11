import Icon from '../Icon/Icon';
import styles from './Icons.module.css';

const Icons: React.FC = () => (
  <div className={styles.icons}>
    <Icon name="inst" width={24} height={24} />
    <Icon name="basket" width={24} height={24} />
  </div>
);

export default Icons;
