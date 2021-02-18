import styled from "styled-components";

export const RestaurantMealsWrapper = styled.div`
  max-width: 100%;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
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
`;
export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  span {
    font-size: 16px;
    margin: 0 0.5rem;
  }
`;
export const QuantityButton = styled.button`
  width: 20px;
  height: 20px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);

  font-size: 13px;
  border-radius: 5px;
  &:focus {
    outline: none;
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
`;
