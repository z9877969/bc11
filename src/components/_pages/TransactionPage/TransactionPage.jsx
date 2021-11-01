import { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import CategoriesList from "../../CategoriesList/CategoriesList";
import GoBackHeader from "../../_shared/GoBackHeader/GoBackHeader";
import LabelInput from "../../_shared/LabelInput/LabelInput";
import Button from "../../_shared/Button/Button";
import {
  costsCategories,
  incomesCategories,
} from "../../../assets/options/transactionCategories.json";
// { transType, handleGoBack }
class TransactionPage extends Component {
  static propTypes = {
    transType: PropTypes.string.isRequired,
    handleGoBack: PropTypes.func.isRequired,
    addTransaction: PropTypes.func.isRequired,
  };

  state = {
    day: "2021-10-29",
    time: "16:15",
    category: this.props.transType === "incomes" ? "Зарплата" : "Продукты",
    sum: "",
    currency: "UAH",
    comment: "",
    isCatList: false,
    categoriesList:
      this.props.transType === "costs" ? costsCategories : incomesCategories,
  };

  toggleCatList = () => {
    const cbForSetState = (prevState) => ({ isCatList: !prevState.isCatList });
    this.setState(cbForSetState);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // openCatList = () => {
  //   this.setState({ isCatList: true });
  // };

  // closeCatList = () => {
  //   this.setState({ isCatList: false });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const { isCatList, ...dataForm } = this.state;
    const { addTransaction, transType } = this.props;
    const transaction = { ...dataForm, id: shortid.generate() };
    // addTransaction({ transaction: transaction, transType: transType });
    addTransaction({ transaction, transType });
  };

  deleteCategory = (id) => {
    console.log(id);
    this.setState((prevState) => {
      return {
        categoriesList: prevState.categoriesList.filter(
          (category) => category.name !== id
        ),
      };
    });
  };

  render() {
    const {
      isCatList,
      day,
      time,
      category,
      currency,
      sum,
      comment,
      categoriesList,
    } = this.state;
    const { transType, handleGoBack } = this.props;
    return (
      <>
        <GoBackHeader
          handleGoBack={!isCatList ? handleGoBack : this.toggleCatList}
          title={
            isCatList
              ? "Категории"
              : transType === "incomes"
              ? "Доходы"
              : "Расходы"
          }
        />
        {!isCatList ? (
          <form onSubmit={this.handleSubmit}>
            <Button type="submit" title="Ok" />
            <LabelInput
              value={day}
              title={"День"}
              name={"day"}
              type={"date"}
              cbOnChange={this.handleChange}
            />
            <LabelInput
              value={time}
              title={"Время"}
              name={"time"}
              type={"time"}
              cbOnChange={this.handleChange}
            />
            <LabelInput
              title={"Категория"}
              name={"category"}
              type={"button"}
              value={category}
              cbOnClick={this.toggleCatList}
            />
            <LabelInput
              title={"Сумма"}
              name={"sum"}
              placeholder={"Введите сумму"}
              value={sum}
              cbOnChange={this.handleChange}
            />
            <LabelInput
              title={"Валюта"}
              name={"currency"}
              type={"button"}
              value={currency}
            />
            <LabelInput
              value={comment}
              name={"comment"}
              placeholder={"Комментарий"}
              cbOnChange={this.handleChange}
            />
          </form>
        ) : (
          <CategoriesList
            categoriesList={categoriesList}
            deleteCategory={this.deleteCategory}
          />
        )}
      </>
    );
  }
}

// TransactionPage.propTypes = {
//   transType: PropTypes.string.isRequired,
//   handleGoBack: PropTypes.func.isRequired,
//   addTransaction: PropTypes.func.isRequired,
// };

export default TransactionPage;
