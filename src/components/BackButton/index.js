import { useHistory } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { Button } from "./style";
const BackBtn = () => {
  const history = useHistory();
  return (
    <Button onClick={() => history.goBack()} aria-label="Powrót">
      <IoChevronBackOutline />
    </Button>
  );
};

export default BackBtn;
