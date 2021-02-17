import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import { InputWrapper, Input } from "./style";
const Search = ({ onChange, value }) => {
  return (
    <InputWrapper>
      <label htmlFor="search">
        <FiSearch />
      </label>
      <Input id="search" name="search" type="text" placeholder="Szukaj..." onChange={onChange} value={value} />
    </InputWrapper>
  );
};

export default Search;
Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
