import styled from "styled-components";

export const StyledHamburger = styled.button`
  width: 25px;
  height: 15px;
  border: none;
  background-color: transparent;
  position: relative;

  &:focus {
    outline: none;
  }
  span {
    ${({ isOpen }) =>
      isOpen
        ? "transition: top 0.1s ease-in-out, transform 0.1s 0.1s ease-in-out, opacity 0.1s 0.1s linear;"
        : "transition: transform 0.1s ease-in-out, top 0.1s 0.1s ease-in-out, opacity 0.1s 0.1s linear;}"};
  }
  span:first-child {
    top: ${({ isOpen }) => (isOpen ? "50%" : 0)};
    transform: ${({ isOpen }) => (isOpen ? " rotate(45deg)" : "rotate(0)")};
  }
  span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }
  span:last-child {
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    top: ${({ isOpen }) => (isOpen ? "50%" : "calc(100% - 2px)")};
  }
`;
export const Bar = styled.span`
  position: absolute;
  left: 0;
  transform-origin: center;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.yellow};
`;
