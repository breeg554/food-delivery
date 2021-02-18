import { useState, useEffect } from "react";
import { HiInformationCircle } from "react-icons/hi";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: -1rem;
  right: -1rem;
  svg {
    font-size: 1.4rem;
  }
`;
const Message = styled.div`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  position: absolute;
  bottom: 100%;
  right: 100%;
  padding: 0.5rem;
  width: 130px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: #fff;
  font-size: 1.2rem;
`;

const Info = ({ children }) => {
  const [isActive, setActive] = useState(false);
  const handleClick = (e) => {
    setActive(!isActive);
  };

  useEffect(() => {
    const closeIfOutsideClick = (e) => {
      if (isActive) setActive(false);
    };
    document.addEventListener("mousedown", closeIfOutsideClick);
    return () => document.removeEventListener("mousedown", closeIfOutsideClick);
  }, [isActive]);

  return (
    <Wrapper id="info" onClick={handleClick} onMouseOver={() => setActive(true)} onMouseOut={() => setActive(false)}>
      <HiInformationCircle />
      <Message isActive={isActive}>{children}</Message>
    </Wrapper>
  );
};

export default Info;
Info.propTypes = {
  children: PropTypes.string.isRequired,
};
