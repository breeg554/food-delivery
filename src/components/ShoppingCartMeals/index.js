import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CartMeal from "./SingleMeal";
import { RestaurantMealsWrapper } from "./style";
const ShoppingCartMeal = ({ data }) => {
  return (
    <RestaurantMealsWrapper>
      <Link to={data[0].restaurant}>{data[0].restaurant}</Link>
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
