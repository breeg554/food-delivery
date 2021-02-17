import { FiSearch } from "react-icons/fi";
import { InputWrapper, Input } from "./style";
const Search = () => {
  return (
    <InputWrapper>
      <label htmlFor="search">
        <FiSearch />
      </label>
      <Input id="search" name="search" type="text" placeholder="Szukaj..." />
    </InputWrapper>
  );
};

export default Search;
