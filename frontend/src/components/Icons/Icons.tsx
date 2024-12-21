import React from 'react';
import Icon from '../Icon/Icon';
import styles from './Icons.module.css';

const Icons: React.FC = () => (
  <div className={styles.icons}>
    <a
      href="https://www.instagram.com/__the_siren__official_/profilecard/?igsh=MTA5OWE4d3luaXA2eg=="
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="inst" width={24} height={24} alt="Instagram" />
    </a>
    <Icon name="basket" width={24} height={24} />
  </div>
);

export default Icons;
