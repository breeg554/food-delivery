import styled from "styled-components";

export const MealCategory = styled.h2`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.dark};
`;

export const StyledMeal = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.dark};
`;
export const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: ${({ width }) => (width ? `${width}px` : "95px")};
  height: ${({ height }) => (height ? `${height}px` : "75px")};
  overflow: hidden;
  border-radius: 8px;
  margin-right: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    font-size: 16px;
  }
  p:nth-of-type(1) {
    font-size: 12px;
  }
  p:nth-of-type(2) {
    font-size: 14px;
  }
`;
