import { useState } from "react";
import { StyledHeader, SideWrapper } from "./style";
import Hamburger from "../Hamburger";
import ShoppingCart from "../ShoppingCart";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenuState = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  return (
    <StyledHeader>
      <SideWrapper>
        <Hamburger toggleMenu={handleToggleMenuState} isMenuOpen={isMenuOpen} />
        <ShoppingCart />
      </SideWrapper>
    </StyledHeader>
  );
};

export default Header;
