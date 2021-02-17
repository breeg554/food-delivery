import { useContext } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";
import { CartBtn, Counter } from "./style";
const ShoppingCart = () => {
  const { getNumberOfCartProduct } = useContext(AppContext);
  return (
    <CartBtn>
      <FaShoppingBasket />
      <Counter>{getNumberOfCartProduct()}</Counter>
    </CartBtn>
  );
};

export default ShoppingCart;
