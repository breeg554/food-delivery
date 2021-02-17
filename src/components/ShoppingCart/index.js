import PropTypes from "prop-types";
import { FaShoppingBasket } from "react-icons/fa";
import { CartBtn, Counter } from "./style";
const ShoppingCart = () => {
  return (
    <CartBtn>
      <FaShoppingBasket />
      <Counter>13</Counter>
    </CartBtn>
  );
};

export default ShoppingCart;
