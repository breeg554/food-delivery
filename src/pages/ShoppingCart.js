import styled from "styled-components";
import { StyledMain } from "./Home";
import CartHeader from "../components/ShoppingCartHeader";
import MealsWrapper from "../components/ShoppingCartMealsWrapper";

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2.4rem;
  }
`;
const EnlargedStyledMain = styled(StyledMain)`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.dark};
  overflow-y: auto;
`;
const Footer = styled.footer`
  padding: 4rem 4.5rem;
  flex-shrink: 0;
`;

const Cart = () => {
  return (
    <PageWrapper>
      <CartHeader />

      <EnlargedStyledMain>
        <MealsWrapper />
      </EnlargedStyledMain>
      <Footer>total ...</Footer>
    </PageWrapper>
  );
};

export default Cart;
