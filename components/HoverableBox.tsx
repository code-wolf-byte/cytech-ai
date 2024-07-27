// components/HoverableBox.tsx
import React from 'react';
import styles from '@/app/css/additional-styles/HoverableBox.module.css';

interface HoverableBoxProps {
  title: string;
  description: string;
  icon?: string;
}

const HoverableBox: React.FC<HoverableBoxProps> = ({ title, description, icon }) => {
  return (
    <div className={styles.box}>
      {icon && <img src={icon} alt={`${title} icon`} className={styles.icon} />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default HoverableBox;
