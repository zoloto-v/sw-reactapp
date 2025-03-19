import { Header } from '../header';
import { Logo } from '../logo';
import { Nav } from '../nav';
import { Section } from '../section';
import logo from '../../../assets/logo.svg';
import { IChildrenProps } from '../../types';

export const Layout: React.FC<IChildrenProps> = ({ children = null }) => {
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
        logo={<Logo src={logo} /> }
        nav={<Nav items={menuItems} />}
      />
      <Section>
        { children }
      </Section>
    </>
  );
};