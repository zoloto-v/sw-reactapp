import styles from "./indicator.module.css";
import { IIndicator } from "../../types";

export const Indicator: React.FC<IIndicator> = ({index = 0, name = ''}) => {
  return (
    <>
      <div className={styles.indicator}>
        <div className={styles.indicator__index}>
          {index}
        </div>
        <span className={styles.indicator__text}>{name}</span>
      </div>
    </>
  );
};