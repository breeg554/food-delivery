import styled from "styled-components";

export const Button = styled.button`
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
