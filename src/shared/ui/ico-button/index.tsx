import { CSSProperties } from "react";
import styles from "./ico-button.module.css";

export const IcoButton: React.FC<{
  text: string;
  ico: string;
  height?: string;
  width?: string;
  style?: CSSProperties;
  onClick: () => void;
}> = ({
  height = "32px",
  width = "32px",
  text = "",
  ico,
  onClick = () => {},
}) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{ height: "43px", width: "44px" }}
    >
      <img height={height} width={width} src={ico} alt={text} />
    </button>
  );
};
