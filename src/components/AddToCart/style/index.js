import styled from "styled-components";

export const StyledAddButton = styled.button`
  width: 25px;
  height: 20px;
  background-color: ${({ theme, inCart }) => (inCart ? theme.colors.green : theme.colors.yellow)};
  border: none;
  border-radius: 12px;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  line-height: 20px;

  ${({ theme }) => theme.mediaQ.xl} {
    width: 35px;
    height: 25px;
    line-height: 30px;
    font-size: 2rem;

    &:hover {
      ${({ inCart }) => (inCart ? null : "background-color: #eca716")};
    }
  }
`;
