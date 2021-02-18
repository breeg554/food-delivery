import styled from "styled-components";

export const RestaurantMealsWrapper = styled.div`
  max-width: 100%;
  max-width: 550px;
  margin: 0 auto;

  a {
    display: inline-block;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
  }
  ${({ theme }) => theme.mediaQ.xl} {
    max-width: 650px;
    a {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }
`;
export const StyledMeal = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.dark};

  ${({ theme }) => theme.mediaQ.lg} {
    box-shadow: 0px 4px 15px -5px rgba(0, 0, 0, 0.2);
  }
`;
export const ContentWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  h3 {
    font-size: 1.6rem;
  }
  p {
    font-size: 1.2rem;
  }
  button {
    color: ${({ theme }) => theme.colors.dark};
  }
  ${({ theme }) => theme.mediaQ.xl} {
    h3 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.6rem;
    }
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
  ${({ theme }) => theme.mediaQ.xl} {
    width: 115px;
    height: 95px;
  }
`;
export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  span {
    font-size: 1.6rem;
    margin: 0 0.5rem;
  }
  ${({ theme }) => theme.mediaQ.xl} {
    margin-right: 2rem;
    span {
      font-size: 2.2rem;
    }
  }
`;
export const QuantityButton = styled.button`
  width: 20px;
  height: 20px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);

  font-size: 1.3rem;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  ${({ theme }) => theme.mediaQ.xl} {
    width: 25px;
    height: 25px;
    font-size: 1.6rem;
  }
`;
export const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  font-size: 1.6rem;
  &:focus {
    outline: none;
  }
  ${({ theme }) => theme.mediaQ.xl} {
    font-size: 2.2rem;
  }
`;
