import styles from "./not-found.module.css"
import ball from "../../shared/assets/images/ball.svg";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__text}>404</div>
      <div style={{background: `url(${ball}) center center no-repeat`}}
        className={styles.container__bg}
      />
    </div>
  );
};