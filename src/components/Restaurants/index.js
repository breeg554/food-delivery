import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { RestaurantsWrapper } from "./style";
import Restaurant from "./SingleRestaurant";
const RestaurantList = () => {
  const { filteredRestaurants } = useContext(AppContext);

  const checkIfTheyAre = () => {
    if (filteredRestaurants.length <= 0) {
      return <p>Nie ma takiej restauracji!</p>;
    }
    return filteredRestaurants.map((res) => (
      <Restaurant key={res.id} data={res} />
    ));
  };
  return <RestaurantsWrapper>{checkIfTheyAre()}</RestaurantsWrapper>;
};

export default RestaurantList;
