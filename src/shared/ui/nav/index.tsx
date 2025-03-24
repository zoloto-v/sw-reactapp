import { NavLink } from "react-router";
import styles from "./nav.module.css";
import { INav } from "../../types";

export const Nav: React.FC<INav> = ({ 
  items, 
  selectors = {
    nav: styles.nav, 
    nav__item: styles.nav__item, 
    nav__link: styles.nav__link} 
  }) => {
  return (
    <ul className={selectors.nav}>
      {items.map(item => (
        <li key={item.id} className={selectors.nav__item}>
          <NavLink
            to={item.url}
            className={({ isActive }) => isActive ? `${styles.nav__link} ${styles.active}` : styles.nav__link}
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
