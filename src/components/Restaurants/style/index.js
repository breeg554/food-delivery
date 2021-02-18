import styled from "styled-components";
import { Link } from "react-router-dom";
export const RestaurantsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2.5rem;
  grid-column-gap: 1rem;
  justify-items: center;
  & > p {
    font-size: 14px;
  }
  ${({ theme }) => theme.mediaQ.sm} {
    grid-template-columns: 1fr 1fr;
    max-width: 650px;
    margin: 0 auto;
  }
  ${({ theme }) => theme.mediaQ.xl} {
    max-width: 750px;
  }
  ${({ theme }) => theme.mediaQ.lg} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.5rem;
    max-width: 1050px;
  }
`;
export const StyledRestaurant = styled.article`
  width: 100%;
  max-width: 290px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);

  overflow: hidden;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.dark};
  box-shadow: 1px 3px 10px -3px rgba(0, 0, 0, 0.3);
  ${({ theme }) => theme.mediaQ.xl} {
    max-width: 350px;
  }
`;
export const ImgWrapper = styled(Link)`
  display: block;
  width: 100%;
  height: 140px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${({ theme }) => theme.mediaQ.xl} {
    height: 160px;
  }
`;
export const ContentWrapper = styled.div`
  padding: 1rem;

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  & > p {
    display: inline-block;
    margin-right: 1.3rem;
    font-size: 1.4rem;
    font-weight: 300;
  }
  ${({ theme }) => theme.mediaQ.xl} {
    h2 {
      font-size: 2.1rem;
    }
    & > p {
      font-size: 1.6rem;
    }
  }
`;
export const DeliveryCost = styled.p`
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: -0.5rem;
    transform: translateY(-50%);
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: ${({ theme, free }) => (free ? theme.colors.yellow : "transparent")};
  }
`;
export const Opinion = styled.div`
  width: 25px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: #fff;
  padding: 0.3rem;
  text-align: center;
  ${({ theme }) => theme.mediaQ.xl} {
    width: 35px;
    font-size: 1.4rem;
  }
`;
