import styles from './button.module.css';
import { IButton } from '../../types';

export const Button: React.FC<IButton> = ({ onClick, bg = "", children }) => {
  return (
    <button className={`${styles.button} ${bg ? styles[bg] : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};