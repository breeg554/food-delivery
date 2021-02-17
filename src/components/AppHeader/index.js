import { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { IoChevronBackOutline } from "react-icons/io5";
import { StyledHeader, SideWrapper, BackBtn } from "./style";
import Hamburger from "../Hamburger";
import ShoppingCart from "../ShoppingCart";
import Nav from "../AppNav";

const Header = ({ isNavNeed }) => {
  const history = useHistory();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenuState = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <SideWrapper>
        {isNavNeed ? (
          <Hamburger toggleMenu={handleToggleMenuState} isMenuOpen={isMenuOpen} />
        ) : (
          <BackBtn onClick={() => history.goBack()}>
            <IoChevronBackOutline />
          </BackBtn>
        )}
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
