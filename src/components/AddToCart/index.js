import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { AppContext } from "../../context/AppContext";
import { StyledAddButton } from "./style";
const AddToCart = ({ data }) => {
  const { pushToShoppingCart } = useContext(AppContext);
  return (
    <StyledAddButton onClick={() => pushToShoppingCart(data)}>
      <FiPlus />
    </StyledAddButton>
  );
};

export default AddToCart;
