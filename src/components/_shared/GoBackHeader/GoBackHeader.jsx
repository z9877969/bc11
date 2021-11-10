import { useHistory } from "react-router-dom";
import Button from "../Button/Button";

const GoBackHeader = ({ title }) => {
  const { push, location, goBack } = useHistory();
  
  // переход назад
  // const cbOnClick = (e) => location.state? push(location.state.from): goBack()

  const cbOnClick = (e) => push(location.state?.from || "/");

  return (
    <header>
      <Button title={"GoBack"} cbOnClick={cbOnClick} />
      <h1>{title}</h1>
    </header>
  );
};

export default GoBackHeader;
