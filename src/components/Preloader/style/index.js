import styled, { keyframes } from "styled-components";

export const StyledPreloader = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 200px;
  }
`;
