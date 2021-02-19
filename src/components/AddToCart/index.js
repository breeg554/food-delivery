import { useContext, useMemo } from "react";
import { store } from "react-notifications-component";
import { FiPlus, FiCheck } from "react-icons/fi";
import { AppContext } from "../../context/AppContext";
import { StyledAddButton } from "./style";
const AddToCart = ({ data }) => {
  const { pushToShoppingCart, checkIfInShoppingCart, shoppingCart } = useContext(AppContext);
  const isInCart = useMemo(() => checkIfInShoppingCart(data), [shoppingCart]);

  const handleAddToCart = () => {
    pushToShoppingCart(data);
    store.addNotification({
      message: "Dodano do koszyka!",
      type: "success",
      insert: "bottom",
      container: "bottom-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
      },
    });
  };
  return (
    <StyledAddButton onClick={handleAddToCart} disabled={isInCart} inCart={isInCart} aria-label="Dodaj posiłek do karty">
      {isInCart ? <FiCheck /> : <FiPlus />}
    </StyledAddButton>
  );
};

export default AddToCart;
