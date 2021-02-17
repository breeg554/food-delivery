import PropTypes from "prop-types";
import { StyledDescription, SideWrapper } from "./style";
import { Opinion, DeliveryCost } from "../Restaurants/style";
const Description = ({ data }) => {
  return (
    <StyledDescription>
      <SideWrapper>
        <h1>{data.name}</h1>
        <Opinion>{data.opinion}</Opinion>
      </SideWrapper>
      <p>{data.deliveryTime}</p>
      <DeliveryCost free={data.deliveryCost === "free"}>
        {data.deliveryCost === "free" ? "Darmowa dostawa" : `Dostawa ${data.deliveryCost}zł`}
      </DeliveryCost>
    </StyledDescription>
  );
};

export default Description;
Description.propTypes = {
  data: PropTypes.object.isRequired,
};
