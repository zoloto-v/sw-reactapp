import styles from "./tag.module.css";

export const Tag: React.FC<{
  color: string;
  text: string;
}> = ({color, text = ''}) => {
  return (
    <span className={`${styles.tag} ${styles[color]}`}>
      {text}
    </span>
  );
};