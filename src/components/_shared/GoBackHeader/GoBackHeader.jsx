import Button from "../Button/Button";

const GoBackHeader = ({ title, handleGoBack }) => {
  const cbOnClick = (e) => handleGoBack();
  return (
    <header>
      <Button title={"GoBack"} cbOnClick={cbOnClick} />
      <h1>{title}</h1>
    </header>
  );
};

export default GoBackHeader;
