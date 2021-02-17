import styled from "styled-components";

export const StyledMeal = styled.article`
  display: flex;
  margin-bottom: 2.5rem;
`;
export const ImageWrapper = styled.div`
  width: 95px;
  height: 75px;
  overflow: hidden;
  border-radius: 5px;
  margin-right: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
