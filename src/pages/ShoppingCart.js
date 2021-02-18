import styled from "styled-components";
import { StyledMain } from "./Home";
import CartHeader from "../components/ShoppingCartHeader";
import MealsWrapper from "../components/ShoppingCartMealsWrapper";
import CartFooter from "../components/ShoppingCartFooter";
const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const EnlargedStyledMain = styled(StyledMain)`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.dark};
  overflow-y: auto;
`;

const Cart = () => {
  return (
    <PageWrapper>
      <CartHeader />
      <EnlargedStyledMain>
        <MealsWrapper />
      </EnlargedStyledMain>
      <CartFooter />
    </PageWrapper>
  );
};

export default Cart;
