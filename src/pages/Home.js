import styled from "styled-components";
import Header from "../components/AppHeader";
import Categories from "../components/Categories";

const StyledMain = styled.main`
  padding: 0 4.5rem;
`;

const Home = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Categories />
      </StyledMain>
    </>
  );
};

export default Home;
