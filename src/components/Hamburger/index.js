import PropTypes from "prop-types";
import { StyledHamburger, Bar } from "./style";
const Hamburger = ({ toggleMenu, isMenuOpen }) => {
  return (
    <StyledHamburger onClick={toggleMenu} isOpen={isMenuOpen}>
      <Bar />
      <Bar />
      <Bar />
    </StyledHamburger>
  );
};

export default Hamburger;
Hamburger.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};
