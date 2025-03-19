import { ILogo } from "../../types";

export const Logo: React.FC<ILogo> = ({ src='', alt='logo' }) => {
  return <img src={ src } alt={ alt } />
};