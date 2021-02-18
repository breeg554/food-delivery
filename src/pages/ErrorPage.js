import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledMain } from "./Home";

const CustomMain = styled(StyledMain)`
  text-align: center;
  a {
    font-size: 1.6rem;
  }
`;
const Error = () => {
  return (
    <CustomMain>
      <h1>Nie ma takiej strony!</h1>
      <Link to="/">Strona główna!</Link>
    </CustomMain>
  );
};

export default Error;
