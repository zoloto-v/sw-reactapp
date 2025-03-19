import { NavLink } from 'react-router';
import linkCss from './link.module.css';
import { ILink, BUTTON_BG } from '../../types';

export const Link: React.FC<ILink> = ({ to = "", bg, styles={}, children }) => {
  const modificator = bg ? `${linkCss.link} ${linkCss[BUTTON_BG[bg]]}` : `${linkCss.link}`;

  return (
    <NavLink to={to}
      className={modificator}
      style={styles}
    >
      {children}
    </NavLink>
  );
};