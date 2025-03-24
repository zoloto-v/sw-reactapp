import { Close } from "../close";
import styles from "./modal.module.css";

export const Modal:React.FC<{
  onClose: () => void;
  children?: React.ReactNode;
}> = ({ onClose, children = null }) => {
  return (
    <div className={styles.overflow}>
      <div className={styles.modal}>
        <div className={styles["modal__inner"]}>
          {children}
        </div>
        <div className={styles["modal__close"]}>
          <Close onClick={onClose}/>
        </div>
      </div>
    </div>
  );
};