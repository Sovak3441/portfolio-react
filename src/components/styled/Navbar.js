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

const Logo = styled.img`
  ${tw`h-6 w-auto`}
`;

const BrandName = styled.h1`
  ${tw`ml-2 text-white font-bold text-lg`}
`;

const Menu = styled.div`
  ${tw`hidden sm:flex items-center`}
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
  const handleMobileMenu = () => {

  }
  return (
    <>
      <Header>
      <Nav>
        <LogoContainer>
          <Logo src="/path/to/logo.png" alt="Logo" />
          <BrandName>Kjell-Arne Neshagen</BrandName>
        </LogoContainer>
        <Menu>
          <MenuLink href="/">
            Home
          </MenuLink>
          <MenuLink href="#about">
            About
          </MenuLink>
          <MenuLink href="#portfolio">
            Portfolio
          </MenuLink>
          <MenuLink href="#contact">
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
