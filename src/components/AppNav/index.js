import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { StyledNav, SideNav, Li } from "./style";
import { FaShoppingBag } from "react-icons/fa";
import {
  IoMdSettings,
  IoIosHeart,
  IoIosHelpCircle,
  IoMdCash,
} from "react-icons/io";

const navElem = [
  { id: 0, path: "/", icon: <IoMdSettings />, text: "Ustawienia" },
  { id: 1, path: "/", icon: <IoIosHeart />, text: "Ulubione" },
  { id: 2, path: "/", icon: <IoIosHelpCircle />, text: "Pomoc" },
  { id: 3, path: "/", icon: <IoMdCash />, text: "Promocje" },
  { id: 4, path: "/", icon: <FaShoppingBag />, text: "Zamówienia" },
];

const Nav = ({ isMenuOpen, closeMenu }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === "outside") closeMenu();
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleOutsideClick, false);
    } else {
      document.body.style.overflow = "unset";
      document.removeEventListener("click", handleOutsideClick, false);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, [isMenuOpen]);
  return (
    <StyledNav id="outside" isOpen={isMenuOpen}>
      <SideNav>
        {navElem.map((el) => (
          <Li key={el.id}>
            <Link to={el.path}>
              {el.icon}
              {el.text}
            </Link>
          </Li>
        ))}
      </SideNav>
    </StyledNav>
  );
};

export default Nav;
Nav.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
