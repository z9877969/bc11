import PropTypes from "prop-types";
import { Component } from "react";
import shortid from "shortid";
import Button from "../_shared/Button/Button";
import LabelInput from "../_shared/LabelInput/LabelInput";
import s from "./CategoriesList.module.css";
import { connect } from "react-redux";
import {
  addCostsCategory,
  addIncomesCategory,
  removeCostsCategory,
  removeIncomesCategory,
} from "../../redux/categories/categoriesActions";

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
    const { addCostsCategory, addIncomesCategory, transType } = this.props;
    const { category } = this.state;
    const newCategory = { title: category, name: shortid.generate() };
    transType === "costs"
      ? addCostsCategory(newCategory)
      : addIncomesCategory(newCategory);
  };
  handleChangeCategory = (e) => {
    const { value } = e.target;
    this.setState({ category: value });
  };
  deleteCategory = (id) => {
    const { transType, removeCostsCategory, removeIncomesCategory } =
      this.props;
    transType === "costs" ? removeCostsCategory(id) : removeIncomesCategory(id);
  };
  render() {
    const { categories, handleChange, currCategory, transType } = this.props;

    return (
      <>
        <ul>
          {categories[transType].map(({ title, name }) => (
            <Item
              key={name}
              title={title}
              name={name}
              deleteCategory={this.deleteCategory}
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
const mapStateToProps = (state) => ({
  categories: state.categories,
});
const mapDispatchToProps = {
  addCostsCategory,
  addIncomesCategory,
  removeCostsCategory,
  removeIncomesCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
