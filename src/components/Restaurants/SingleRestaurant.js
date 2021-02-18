import PropTypes from "prop-types";
import { StyledRestaurant, ImgWrapper, ContentWrapper, Opinion, DeliveryCost } from "./style";

const Restaurant = ({ data }) => {
  return (
    <StyledRestaurant>
      <ImgWrapper to={data.name}>
        <img src={data.image} alt={data.name} />
      </ImgWrapper>
      <ContentWrapper>
        <div>
          <h2>{data.name}</h2>
          <Opinion>{data.opinion}</Opinion>
        </div>
        <p>{data.deliveryTime}</p>
        <DeliveryCost free={data.deliveryCost === 0}>
          {data.deliveryCost === 0 ? "Darmowa dostawa" : `Dostawa ${data.deliveryCost}zł`}
        </DeliveryCost>
      </ContentWrapper>
    </StyledRestaurant>
  );
};

export default Restaurant;
Restaurant.propTypes = {
  data: PropTypes.object.isRequired,
};
