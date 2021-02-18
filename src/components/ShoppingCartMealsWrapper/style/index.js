import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 2.5rem;
`;
export const ClearCart = styled.p`
  font-size: 1.6rem;
  text-align: center;
  ${({ theme }) => theme.mediaQ.xl} {
    font-size: 2.6rem;
  }
`;
