import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Wrapper, ClearCart } from "./style";
import ShoppingCartMeal from "../ShoppingCartMeals";
const MealsWrapper = () => {
  const { shoppingCart } = useContext(AppContext);

  return (
    <Wrapper>
      {Object.entries(shoppingCart).length === 0 ? (
        <ClearCart>Koszyk jest pusty!</ClearCart>
      ) : (
        Object.keys(shoppingCart).map((res) => {
          return <ShoppingCartMeal key={res} data={shoppingCart[res]} />;
        })
      )}
    </Wrapper>
  );
};

export default MealsWrapper;
