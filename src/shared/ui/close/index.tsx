import styles from "./close.module.css";

export const Close: React.FC<{onClick: () => void}> = ({onClick = () => {}}) => {
  return (
    <span className={styles.close} onClick={onClick}/>
  );
};