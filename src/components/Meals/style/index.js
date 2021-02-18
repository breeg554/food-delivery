import styled from "styled-components";

const MAX_WIDTH_SM = 380;
const MAX_WIDTH_MD = 550;
const MAX_WIDTH_LG = 1050;
export const MealCategory = styled.h2`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.dark};
  max-width: ${MAX_WIDTH_SM}px;
  margin-right: auto;
  margin-left: auto;
  ${({ theme }) => theme.mediaQ.md} {
    max-width: ${MAX_WIDTH_MD}px;
  }
  ${({ theme }) => theme.mediaQ.xl} {
    font-size: 3rem;
  }
  ${({ theme }) => theme.mediaQ.lg} {
    max-width: ${MAX_WIDTH_LG}px;
    margin-bottom: 3rem;
  }
`;
export const MealWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  ${({ theme }) => theme.mediaQ.lg} {
    max-width: ${MAX_WIDTH_LG}px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
  }
`;
export const StyledMeal = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  width: 100%;
  max-width: ${MAX_WIDTH_SM}px;
  margin-right: auto;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.dark};
  ${({ theme }) => theme.mediaQ.md} {
    max-width: ${MAX_WIDTH_MD}px;
  }
  ${({ theme }) => theme.mediaQ.lg} {
    box-shadow: 0px 4px 15px -5px rgba(0, 0, 0, 0.2);
  }
`;
export const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 95px;
  height: 75px;
  overflow: hidden;
  border-radius: 8px;
  margin-right: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${({ theme }) => theme.mediaQ.lg} {
    width: 115px;
    height: 95px;
  }
`;
export const ContentWrapper = styled.div`
  flex-grow: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  h3 {
    font-size: 1.6rem;
  }
  p:nth-of-type(1) {
    font-size: 1.2rem;
  }
  p:nth-of-type(2) {
    font-size: 1.4rem;
  }
  ${({ theme }) => theme.mediaQ.xl} {
    h3 {
      font-size: 2rem;
    }
    p:nth-of-type(1) {
      font-size: 1.5rem;
    }
    p:nth-of-type(2) {
      font-size: 1.8rem;
    }
  }
  ${({ theme }) => theme.mediaQ.lg} {
    h3 {
      font-size: 2.5rem;
    }
    p:nth-of-type(1) {
      font-size: 1.8rem;
    }
    p:nth-of-type(2) {
      font-size: 2.2rem;
    }
  }
`;
