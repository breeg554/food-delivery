import SearchInput from "../SearchInput";
import { Section, CategoryPicker, Category } from "./style";

const categories = [
  { id: 0, name: "Wszystkie" },
  { id: 1, name: "Polska" },
  { id: 2, name: "Włoska" },
  { id: 3, name: "Pizza" },
  { id: 4, name: "Sushi" },
  { id: 5, name: "Kebab" },
];

const Categories = () => {
  return (
    <Section>
      <SearchInput />
      <div>
        <h1>Kategorie</h1>
        <CategoryPicker>
          {categories.map((el) => (
            <Category key={el.id}>{el.name}</Category>
          ))}
        </CategoryPicker>
      </div>
    </Section>
  );
};

export default Categories;
