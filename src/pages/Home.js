import { useEffect, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import Header from "../components/AppHeader";
import Categories from "../components/Categories";
import Restaurants from "../components/Restaurants";
export const StyledMain = styled.main`
  padding: 0 4.5rem;
`;

const Home = () => {
  const { handleClearRestaurantFilter } = useContext(AppContext);
  useEffect(() => {
    handleClearRestaurantFilter();
  }, []);
  return (
    <>
      <Header />
      <StyledMain>
        <Categories />
        <Restaurants />
      </StyledMain>
    </>
  );
};

export default Home;
