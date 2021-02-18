import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Wrapper } from "./style";
import ShoppingCartMeal from "../ShoppingCartMeals";
const MealsWrapper = () => {
  const { shoppingCart } = useContext(AppContext);

  return (
    <Wrapper>
      {Object.keys(shoppingCart).map((res) => {
        return <ShoppingCartMeal key={res} data={shoppingCart[res]} />;
      })}
    </Wrapper>
  );
};

export default MealsWrapper;
