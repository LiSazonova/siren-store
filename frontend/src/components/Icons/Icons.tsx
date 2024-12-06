import Icon from '../Icon/Icon';
import styles from './Icons.module.css';

const Icons: React.FC = () => (
  <div className={styles.icons}>
    <Icon name="inst" size={24} />
    <Icon name="basket" size={24} />
  </div>
);

export default Icons;
