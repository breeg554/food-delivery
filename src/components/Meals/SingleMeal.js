import PropTypes from "prop-types";
import { ImageWrapper, StyledMeal } from "./style";
const Meal = ({ data }) => {
  return (
    <StyledMeal>
      <ImageWrapper>
        <img src={data.image} alt={data.name} />
      </ImageWrapper>
      <div>
        <h3>{data.name}</h3>
      </div>
    </StyledMeal>
  );
};

export default Meal;
Meal.propTypes = {
  data: PropTypes.object.isRequired,
};
