import PropTypes from "prop-types";
import CartMeal from "./SingleMeal";
import { RestaurantMealsWrapper } from "./style";
const ShoppingCartMeal = ({ data }) => {
  return (
    <RestaurantMealsWrapper>
      <h2>{data[0].restaurant}</h2>
      {data.map((el) => (
        <CartMeal key={el.id} data={el} />
      ))}
    </RestaurantMealsWrapper>
  );
};

export default ShoppingCartMeal;
ShoppingCartMeal.propTypes = {
  data: PropTypes.array.isRequired,
};
