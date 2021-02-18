import { useContext } from "react";
import { GiCancel } from "react-icons/gi";
import { AppContext } from "../../context/AppContext";
import PropTypes from "prop-types";
import { StyledMeal, ImageWrapper } from "../Meals/style";
import { ContentWrapper, QuantityButton, QuantityWrapper, RemoveButton } from "./style";

const ChangeQuantity = ({ data }) => {
  const { removeFromShoppingCart, pushToShoppingCart } = useContext(AppContext);

  return (
    <QuantityWrapper>
      <QuantityButton onClick={() => removeFromShoppingCart(data)}>-</QuantityButton>
      <span>{data.count}</span>
      <QuantityButton onClick={() => pushToShoppingCart(data)} disabled={data.count >= 9}>
        +
      </QuantityButton>
    </QuantityWrapper>
  );
};

const CartMeal = ({ data }) => {
  const { removeFromShoppingCart } = useContext(AppContext);
  return (
    <StyledMeal>
      <ImageWrapper width={75} height={55}>
        <img src={data.image} alt={data.name} />
      </ImageWrapper>
      <ContentWrapper>
        <ChangeQuantity data={data} />
        <div>
          <h3>{data.name}</h3>
          <p>{Number.parseFloat(data.total).toFixed(2)}zł</p>
        </div>
        <RemoveButton onClick={() => removeFromShoppingCart({ ...data, count: 1 })}>
          <GiCancel />
        </RemoveButton>
      </ContentWrapper>
    </StyledMeal>
  );
};

export default CartMeal;
CartMeal.propTypes = {
  data: PropTypes.object.isRequired,
};
