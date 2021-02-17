import styled from "styled-components";

export const CartBtn = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  border: none;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 20px;
  }
`;
export const Counter = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: -3px;
  right: -3px;
  font-size: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  line-height: 15px;
`;
