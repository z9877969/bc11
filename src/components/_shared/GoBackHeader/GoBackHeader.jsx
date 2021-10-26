import Button from '../Button/Button';

const GoBackHeader = ({title}) => {
  return (
    <header>
      <Button title={"GoBack"}/>
      <h1>{title}</h1>
    </header>
  )
}

export default GoBackHeader;