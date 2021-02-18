import styled from "styled-components";
import { SideWrapper } from "../AppHeader/style";
import { StyledHeader } from "../AppHeader/style";
import BackButton from "../BackButton";

const CustomHeader = styled(StyledHeader)`
  padding: 4rem 4.5rem 5rem 4rem;
  h1 {
    color: ${({ theme }) => theme.colors.dark};

    font-size: 2.4rem;
  }
  ${({ theme }) => theme.mediaQ.xl} {
    h1 {
      font-size: 3.4rem;
    }
  }
`;

const CartHeader = () => {
  return (
    <CustomHeader>
      <SideWrapper>
        <BackButton />
        <h1>Twój koszyk</h1>
      </SideWrapper>
    </CustomHeader>
  );
};

export default CartHeader;
