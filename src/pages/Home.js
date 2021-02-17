import styled from "styled-components";
import Header from "../components/AppHeader";
import Categories from "../components/Categories";
import Restaurants from "../components/Restaurants";
export const StyledMain = styled.main`
  padding: 0 4.5rem;
`;

const Home = () => {
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
