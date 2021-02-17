import styled from "styled-components";

export const StyledNav = styled.nav`
  position: absolute;
  z-index: 98;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${({ isOpen }) => (isOpen ? "rgba(0, 0, 0, 0.4)" : "transparent")};
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: ${({ isOpen }) =>
    isOpen
      ? "transform 0.2s ease-in-out, background-color 0.1s 0.2s ease-in-out"
      : "background-color 0.1s  ease-in-out,transform 0.2s 0.1s ease-in-out"};
`;
export const SideNav = styled.ul`
  width: 260px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding-top: 15rem;
  li:first-child {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }
`;
export const Li = styled.li`
  width: 100%;
  font-size: 16px;
  margin-bottom: 1.5rem;

  a {
    margin-left: 4rem;
    width: 170px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 24px;
    margin-right: 1rem;
  }
`;
