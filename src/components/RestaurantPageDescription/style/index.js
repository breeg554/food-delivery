import styled from "styled-components";

export const StyledDescription = styled.div`
  margin-top: 7rem;
  margin-bottom: 4rem;
  p {
    display: inline-block;
    margin-right: 1.3rem;
    font-size: 1.4rem;
    font-weight: 300;
  }
`;
export const SideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 2.6rem;
    font-weight: 400;
    max-width: 70%;
  }
  & > div {
    font-size: 12px;
  }
`;
