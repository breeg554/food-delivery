import PropTypes from "prop-types";
import { MealCategory } from "./style";
import Meal from "./SingleMeal";
const Meals = ({ data }) => {
  const groupByCategory = () => {
    let out_data = {};

    data.foodList.forEach((row) => {
      if (out_data[row.category]) {
        out_data[row.category].push(row);
      } else {
        out_data[row.category] = [row];
      }
    });

    return Object.keys(out_data).map((key) => {
      return (
        <div key={key}>
          <MealCategory>{key}</MealCategory>
          {out_data[key].map((el) => (
            <Meal key={el.id} data={el} />
          ))}
        </div>
      );
    });
  };

  return <div>{groupByCategory()}</div>;
};

export default Meals;
Meals.propTypes = {
  data: PropTypes.object.isRequired,
};
