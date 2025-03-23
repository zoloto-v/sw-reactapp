import { Header } from "../header";
import { Logo } from "../logo";
import { Nav } from "../nav";
import { Section } from "../section";
import logo from "../../assets/images/logo.svg";
import { IChildrenProps } from "../../types";
import { useLanguageContext } from "../../../features/language-context/provider";

export const Layout: React.FC<IChildrenProps> = ({ children = null }) => {
  const { t } = useLanguageContext();
  // TODO: вынести из файла
  const menuItems = [
    {
      id: 0,
      text: t("nav.home"),
      url: "/",
    },
    {
      id: 1,
      text: t("nav.characters"),
      url: "/characters",
    },
  ];

  return (
    <>
      <Header logo={<Logo src={logo} />} nav={<Nav items={menuItems} />} />
      <Section>{children}</Section>
    </>
  );
};
