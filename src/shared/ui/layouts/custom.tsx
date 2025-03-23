import { Header } from "../header";
import { Logo } from "../logo";
import { Nav } from "../nav";
import logo from "../../assets/images/logo.svg";
import { useLanguageContext } from "../../../features/language-context/provider";

export const CustomLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children = null }) => {
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
      {children}
    </>
  );
};
