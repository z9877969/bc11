import PropTypes from "prop-types";
import Button from "../_shared/Button/Button";
import s from "./CategoriesList.module.css";

const Item = ({ name, title, deleteCategory }) => {
  const cbRemove = () => {
    deleteCategory(name);
  };
  return (
    <li className={s.item}>
      {title}
      <Button className={s.button} iconId="icon-edit-pencil" />
      <Button className={s.button} iconId="icon-trash" cbOnClick={cbRemove} />
    </li>
  );
};

const CategoriesList = ({ categoriesList, deleteCategory }) => {
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
