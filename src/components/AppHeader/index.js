import { useState } from "react";
import { StyledHeader, SideWrapper } from "./style";
import Hamburger from "../Hamburger";
import ShoppingCart from "../ShoppingCart";
import Nav from "../AppNav";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenuState = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <StyledHeader>
      <SideWrapper>
        <Hamburger toggleMenu={handleToggleMenuState} isMenuOpen={isMenuOpen} />
        <ShoppingCart />
      </SideWrapper>
      <Nav isMenuOpen={isMenuOpen} closeMenu={handleToggleMenuState} />
    </StyledHeader>
  );
};

export default Header;
