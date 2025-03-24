import { Link } from "react-router";
import { IHeaderProps } from "../../types";
import styles from "./header.module.css";
import { IcoButton } from "../ico-button";
import { useMediaQuery } from "react-responsive";
import ico from "../../assets/images/menu-ico.svg";

export const Header: React.FC<IHeaderProps> = ({ logo = null, nav = null }) => {
  const isMobileVisible = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link to={"/"} className="mt-6">
          {logo}
        </Link>
        {isMobileVisible ? (
          <IcoButton text="menu-ico" ico={ico} onClick={() => {}} />
        ) : (
          <>{nav}</>
        )}
      </div>
    </header>
  );
};
