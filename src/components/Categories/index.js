import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import SearchInput from "../SearchInput";
import { Section, CategoryPicker, Category } from "./style";

const categories = [
  { id: 0, name: "Wszystkie", tag: "ALL" },
  { id: 1, name: "Polska", tag: "POLISH" },
  { id: 2, name: "Włoska", tag: "ITALY" },
  { id: 3, name: "Pizza", tag: "PIZZA" },
  { id: 4, name: "Sushi", tag: "SUSHI" },
  { id: 5, name: "Kebab", tag: "KEBAB" },
];

const Categories = () => {
  const { restaurantCategory, handleChangeCategory, handleChangeValue, restaurantInputValue } = useContext(AppContext);
  return (
    <Section>
      <SearchInput onChange={handleChangeValue} value={restaurantInputValue} />
      <div>
        <h1>Kategorie</h1>
        <CategoryPicker>
          {categories.map((el) => (
            <Category key={el.id} active={restaurantCategory === el.tag}>
              <button onClick={() => handleChangeCategory(el.tag)}>{el.name}</button>
            </Category>
          ))}
        </CategoryPicker>
      </div>
    </Section>
  );
};

export default Categories;
