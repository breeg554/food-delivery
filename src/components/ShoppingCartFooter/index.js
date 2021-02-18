import { useContext } from "react";
import { HiOutlineShare } from "react-icons/hi";
import { AppContext } from "../../context/AppContext";
import { Footer, SideWrapper, BuyButton, ShareCart } from "./style";
import ShortInfoOnHover from "../HoverInfo";
const CartFooter = () => {
  const { totalCost, handleGetDeliveryCost } = useContext(AppContext);
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
        <BuyButton>Zamów</BuyButton>
      </SideWrapper>
    </Footer>
  );
};

export default CartFooter;
