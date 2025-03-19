import { Header } from '../header';
import { Logo } from '../logo';
import { Nav } from '../nav';
import logo from '../../../assets/logo.svg';

export const CustomLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children = null }) => {
  // TODO: вынести из файла
  const menuItems = [
    {
      id: 0,
      text: 'Home',
      url: '/',
    },
    {
      id: 1,
      text: 'Characters',
      url: '/characters',
    }
  ];

  return (
    <>
      <Header
        logo={<Logo src={logo} />}
        nav={<Nav items={menuItems} />}
      />
      {children}
    </>
  );
};