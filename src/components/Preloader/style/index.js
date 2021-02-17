import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const StyledPreloader = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 25px;
    color: ${({ theme }) => theme.colors.blue};
    animation: 0.3s ${rotate} infinite ease-in-out;
  }
`;
