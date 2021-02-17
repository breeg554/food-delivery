import { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import { StyledMain } from "./Home";
import { AppContext } from "../context/AppContext";
import Header from "../components/AppHeader";
import Description from "../components/RestaurantPageDescription";
import Meals from "../components/Meals";

const RestaurantBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 180px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const LinkToHomePage = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 16px;
`;

const Restaurant = () => {
  const { handleGetRestaurant } = useContext(AppContext);
  const { location } = useHistory();
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    const nameFromPath = location.pathname.split("/")[1];
    setRestaurant(handleGetRestaurant(nameFromPath));
  }, []);

  const renderView = () => {
    if (!restaurant) return <LinkToHomePage to="/">Nie ma takiej restauracji!</LinkToHomePage>;
    return (
      <>
        <RestaurantBanner>
          <img src={restaurant.image} alt={restaurant.name} />
        </RestaurantBanner>
        <Description data={restaurant} />
        <Meals data={restaurant} />
      </>
    );
  };
  return (
    <>
      <Header isNavNeed={false} />
      <StyledMain>{renderView()}</StyledMain>
    </>
  );
};

export default Restaurant;
