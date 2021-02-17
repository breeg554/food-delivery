import styled from "styled-components";
import { Link } from "react-router-dom";
export const RestaurantsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  & > p {
    font-size: 14px;
  }
`;
export const StyledRestaurant = styled.article`
  width: 100%;
  max-width: 290px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 2.5rem;
  overflow: hidden;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.dark};
  box-shadow: 1px 3px 10px -3px rgba(0, 0, 0, 0.3);
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
`;
