import { CSSProperties } from "react";

export interface IHeaderProps {
  logo: React.ReactNode;
  nav: React.ReactNode;
};

export enum BUTTON_BG {
  yellow = "yellow",
  green = "green",
};

export interface IButton {
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  bg?: BUTTON_BG;
};

export interface ILink {
  to?: string;
  children: React.ReactNode;
  bg?: BUTTON_BG;
  styles?: CSSProperties;
};

export interface IDropdown {
  onChange: (value: string) => void;
  selected?: string;
  items?: Array<{
    text: string;
    value: string;
  }>
};

export interface IIndicator {
  index: number;
  name: string;
};

export interface IChildrenProps {
  children: React.ReactNode;
};

export interface ILogo {
  src: string;
  alt?: string;
};

export interface INav<T = IItem> {
  selectors?: {
    nav: string,
    nav__item: string,
    nav__link: string,
  };
  items: Array<T>;
};

export interface IItem {
  id: number;
  text: string;
  url: string;
};

export interface IBanner {
  title: string;
  text: string;
};

export enum GENDER_COLOR_LABEL {
  male = "green",
  female = "violete",
  hermaphrodite = "yellow",
  'n/a' = 'n/a'
};

export interface IList<T> {
  items: Array<T>;
};