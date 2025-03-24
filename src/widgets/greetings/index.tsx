import styles from "./greetings.module.css";
import { IBanner } from "../../shared/types";

export const Banner: React.FC<IBanner> = ({ title = '', text = '' }) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.banner__text}>{ title }</h1>
      <h2 className={styles.banner__text}>{ text }</h2>
    </div>
  );
};