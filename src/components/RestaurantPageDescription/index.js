import PropTypes from "prop-types";
import { StyledDescription, SideWrapper } from "./style";
import { Opinion, DeliveryCost } from "../Restaurants/style";
const Description = ({ data }) => {
  return (
    <StyledDescription>
      <h1>{data.name}</h1>
      <Opinion>{data.opinion}</Opinion>

      <SideWrapper>
        <p>{data.deliveryTime}</p>
        <DeliveryCost free={data.deliveryCost === 0}>
          {data.deliveryCost === 0 ? "Darmowa dostawa" : `Dostawa ${data.deliveryCost}zł`}
        </DeliveryCost>
      </SideWrapper>
    </StyledDescription>
  );
};

export default Description;
Description.propTypes = {
  data: PropTypes.object.isRequired,
};
