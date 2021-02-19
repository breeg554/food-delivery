import { useContext } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { HiOutlineShare } from "react-icons/hi";
import { AppContext } from "../../context/AppContext";
import { Footer, SideWrapper, BuyButton, ShareCart } from "./style";
import ShortInfoOnHover from "../HoverInfo";
const CartFooter = () => {
  const { totalCost, handleGetDeliveryCost, handleClearShoppingCart, shoppingCart } = useContext(AppContext);
  const increasedByDelivery = Number.parseFloat(totalCost + handleGetDeliveryCost()).toFixed(2);

  return (
    <Footer>
      <SideWrapper>
        <p>Suma:</p>
        <p>{increasedByDelivery}zł</p>
        <ShortInfoOnHover>Ostateczna cena powiększona o koszty dostaw z każdej restauracji</ShortInfoOnHover>
      </SideWrapper>
      <SideWrapper>
        <ShareCart>
          <HiOutlineShare />
          Udostępnij koszyk
        </ShareCart>
        <Link
          to={{
            pathname: "/preparation",
            state: { fromShoppingCart: true },
          }}
        >
          <BuyButton
            onClick={handleClearShoppingCart}
            disabled={_.isEmpty(shoppingCart)}
            isDisabled={_.isEmpty(shoppingCart)}
            aria-label="Zamów"
          >
            Zamów
          </BuyButton>
        </Link>
      </SideWrapper>
    </Footer>
  );
};

export default CartFooter;
