import PropTypes from "prop-types";
import Button from "../_shared/Button/Button";
import LabelInput from "../_shared/LabelInput/LabelInput";
import s from "./CategoriesList.module.css";

const Item = ({ name, title, deleteCategory ,handleChange, currCategory}) => {
  const cbRemove = () => {
    deleteCategory(name);
  };
  return (
    <li className={s.item}>
      <LabelInput type={"radio"} cbOnChange={handleChange}
        checked={name === currCategory}
        title={title}
        name={"category"}
        value={name}

        
  />
      <Button className={s.button} iconId="icon-edit-pencil" />
      <Button className={s.button} iconId="icon-trash" cbOnClick={cbRemove} />
    </li>
  );
};

const CategoriesList = ({ categoriesList, deleteCategory,handleChange , currCategory}) => {
  console.log("categoriesList:", categoriesList);
  return (
    <>
      <ul>
        {categoriesList.map(({ title, name }) => (
          <Item
            key={name}
            title={title}
            name={name}
            deleteCategory={deleteCategory}
            handleChange={handleChange}
            currCategory={ currCategory}
          />
        ))}
      </ul>
      <form>
        <input type="text" placeholder="Новая категория" />
      </form>
    </>
  );
};

CategoriesList.propTypes = {
  title: PropTypes.string,
};

export default CategoriesList;
