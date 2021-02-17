import styled from "styled-components";

export const StyledAddButton = styled.button`
  width: 25px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  border-radius: 12px;
  flex-shrink: 0;
  color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
