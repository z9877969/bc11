import PropTypes from "prop-types";
import { Component } from "react";
import shortid from "shortid";
import Button from "../_shared/Button/Button";
import LabelInput from "../_shared/LabelInput/LabelInput";
import s from "./CategoriesList.module.css";

const Item = ({ name, title, deleteCategory, handleChange, currCategory }) => {
  const cbRemove = () => {
    deleteCategory(name);
  };
  return (
    <li className={s.item}>
      <LabelInput
        type={"radio"}
        cbOnChange={handleChange}
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

// {
//   categoriesList,
//   deleteCategory,
//   handleChange,
//   currCategory,
//   addCategory,
// }
class CategoriesList extends Component {
  state = {
    category: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addCategory } = this.props;
    const { category } = this.state;
    addCategory({ title: category, name: shortid.generate() });
  };
  handleChangeCategory = (e) => {
    const { value } = e.target;
    this.setState({ category: value });
  };

  render() {
    const { categoriesList, deleteCategory, handleChange, currCategory } =
      this.props;
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
              currCategory={currCategory}
            />
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Новая категория"
            name="category"
            value={this.state.category}
            onChange={this.handleChangeCategory}
          />
          <Button title={"Add"} type="submit" className={""} />
        </form>
      </>
    );
  }
}

CategoriesList.propTypes = {
  title: PropTypes.string,
};

export default CategoriesList;
