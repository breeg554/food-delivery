import { useState } from "react";
import PropTypes from "prop-types";
import BackButton from "../BackButton";
import { StyledHeader, SideWrapper } from "./style";
import Hamburger from "../Hamburger";
import ShoppingCart from "../ShoppingBasket";
import Nav from "../AppNav";

const Header = ({ isNavNeed }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenuState = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <SideWrapper>
        {isNavNeed ? <Hamburger toggleMenu={handleToggleMenuState} isMenuOpen={isMenuOpen} /> : <BackButton />}
        <ShoppingCart />
      </SideWrapper>
      {isNavNeed ? <Nav isMenuOpen={isMenuOpen} closeMenu={handleToggleMenuState} /> : null}
    </StyledHeader>
  );
};

export default Header;
Header.defaultProps = {
  isNavNeed: true,
};
Header.propTypes = {
  isNavNeed: PropTypes.bool.isRequired,
};
