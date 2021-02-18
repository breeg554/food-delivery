import { useContext } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";
import { CartBtn, Counter } from "./style";
const ShoppingCart = () => {
  const { getNumberOfProductInCart } = useContext(AppContext);
  return (
    <CartBtn to="/cart">
      <FaShoppingBasket />
      <Counter>{getNumberOfProductInCart()}</Counter>
    </CartBtn>
  );
};

export default ShoppingCart;
