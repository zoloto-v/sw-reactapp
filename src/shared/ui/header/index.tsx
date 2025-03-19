import { Link } from "react-router";
import { IHeaderProps } from "../../types";
import styles from "./header.module.css";

export const Header: React.FC<IHeaderProps> = ({logo = null, nav = null}) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link to={"/"} className="mt-6">
          {logo}
        </Link>
        <>{nav}</>
      </div>
    </header>
  );
};