import PropTypes from "prop-types";
import AddToCart from "../AddToCart";
import { ImageWrapper, StyledMeal, ContentWrapper } from "./style";
const Meal = ({ data }) => {
  return (
    <StyledMeal>
      <ImageWrapper>
        <img src={data.image} alt={data.name} />
      </ImageWrapper>
      <ContentWrapper>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <p>{data.cost}zł</p>
      </ContentWrapper>
      <AddToCart data={data} />
    </StyledMeal>
  );
};

export default Meal;
Meal.propTypes = {
  data: PropTypes.object.isRequired,
};
