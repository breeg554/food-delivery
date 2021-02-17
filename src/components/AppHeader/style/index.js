import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledHeader = styled.header`
  position: relative;
  z-index: 99;
  width: 100%;
  padding: 4rem 4.5rem;
`;
export const SideWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BackBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.yellow};
  }
  &:focus {
    outline: none;
  }
`;
