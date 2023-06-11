import {useState} from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

import tw from 'twin.macro';

const Header = styled.header`
  ${tw`w-full lg:container mx-auto sticky top-0`}
`;

const Nav = styled.nav`
  ${tw`z-20 h-16 flex items-center justify-between bg-[#35045C] lg:rounded-lg text-titanium-silver px-4 sm:px-8`}
`;

const LogoContainer = styled.div`
  ${tw`flex items-center`}
`;

const BrandName = styled.h1`
  ${tw`ml-2 text-white font-bold text-lg`}
`;

const Menu = styled.div`
  ${tw`sm:flex sm:flex-row sm:bg-transparent sm:static flex-col items-center absolute right-0 top-16 bg-[#35045C]`}
  ${props => !props.menuOpen && tw`hidden sm:flex`}
`;

const MenuLink = styled.a`
  ${tw`text-white flex items-center cursor-pointer mx-2 px-2 py-1 rounded transition-colors duration-300 hover:text-black hover:bg-light`}
  &.hover {
    ${tw`text-black bg-white`}
  }
`;

const Hamburger = styled(FaBars)`
  ${tw`block text-white text-2xl cursor-pointer sm:hidden`}
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMobileMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }
  const handleLinkClick = () => {
    if (!menuOpen) return; // Return if menu is already closed on small screens
    setMenuOpen(false);
  };
  return (
      <>
        <Header>
          <Nav>
            <LogoContainer>
              <BrandName>Kjell-Arne Neshagen</BrandName>
            </LogoContainer>

            <Menu menuOpen={menuOpen ? 1 : 0}>
              <MenuLink href="/">
                Home
              </MenuLink>
              <MenuLink href="#about" onClick={handleLinkClick}>
                About
              </MenuLink>
              <MenuLink href="#portfolio" onClick={handleLinkClick}>
                Portfolio
              </MenuLink>
              <MenuLink href="#contact" onClick={handleLinkClick}>
                Contact
              </MenuLink>
            </Menu>

            <Hamburger onClick={handleMobileMenu} />
          </Nav>
        </Header>
      </>
  );
};

export default Navbar;