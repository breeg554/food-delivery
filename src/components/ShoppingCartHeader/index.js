import { StyledHeader } from "../AppHeader/style";
import { SideWrapper } from "../AppHeader/style";
import BackButton from "../BackButton";
const CartHeader = () => {
  return (
    <StyledHeader>
      <SideWrapper>
        <BackButton />
        <h1>Twój koszyk</h1>
      </SideWrapper>
    </StyledHeader>
  );
};

export default CartHeader;
