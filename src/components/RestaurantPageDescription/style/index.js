import styled from "styled-components";

export const StyledDescription = styled.div`
  margin-top: 7rem;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.dark};
  max-width: 380px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  h1 {
    flex-grow: 1;
    font-size: 2.6rem;
    font-weight: 400;
  }
  p {
    display: inline-block;
    margin-right: 1.3rem;
    font-size: 1.4rem;
    font-weight: 300;
  }
  ${({ theme }) => theme.mediaQ.md} {
    max-width: 550px;
  }
  ${({ theme }) => theme.mediaQ.xl} {
    h1 {
      font-size: 3.8rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
  ${({ theme }) => theme.mediaQ.lg} {
    max-width: 1050px;
    h1 {
      font-size: 5rem;
      flex-grow: 0;
      margin-right: 5rem;
    }
    p {
      font-size: 2.2rem;
      margin-right: 2.5rem;
    }
    & > div:nth-of-type(1) {
      order: 3;
    }
  }
`;
export const SideWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  ${({ theme }) => theme.mediaQ.lg} {
    order: 2;
    width: auto;
  }
`;
