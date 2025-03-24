import styles from "./card.module.css";

export const Card: React.FC<{
  children?: React.ReactNode
}> = ({children}) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
};