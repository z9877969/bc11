import { Component } from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import CategoriesList from "../../CategoriesList/CategoriesList";
import GoBackHeader from "../../_shared/GoBackHeader/GoBackHeader";
import LabelInput from "../../_shared/LabelInput/LabelInput";
import Button from "../../_shared/Button/Button";
import {
  costsCategories,
  incomesCategories,
} from "../../../assets/options/transactionCategories.json";
import { addTransactionApi } from "../../../services/api";


class TransactionPage extends Component {
  static propTypes = {
    transType: PropTypes.string.isRequired,
    handleGoBack: PropTypes.func.isRequired,
    addTransaction: PropTypes.func.isRequired,
  };

  state = {
    day: "2021-10-29",
    time: "16:15",
    category: this.props.transType === "incomes" ? "salary" : "foods",
    sum: "",
    currency: "UAH",
    comment: "",
    isOpenCatlList: false,
    isLoading: false,
    categoriesList:
      this.props.transType === "costs" ? costsCategories : incomesCategories,
  };

  toggleCatList = () => {
    const cbForSetState = (prevState) => ({
      isOpenCatlList: !prevState.isOpenCatlList,
    });
    this.setState(cbForSetState);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    name === "category" && this.setState({ isOpenCatlList: false });
  };

  // openCatList = () => {
  //   this.setState({ isOpenCatlList: true });
  // };

  // closeCatList = () => {
  //   this.setState({ isOpenCatlList: false });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const { isOpenCatlList, categoriesList, isLoading, ...dataForm } =
      this.state;
    const { addTransaction, transType, setError } = this.props;
    this.toggleLoader();
    addTransactionApi({ transaction: dataForm, transType })
      .then((transaction) => addTransaction({ transaction, transType }))
      .catch((err) => setError(err.message))
      .finally(() => this.toggleLoader());
  };

  toggleLoader = () => {
    this.setState({ isLoading: !this.state.isLoading });
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

  addCategory = (category) => {
    this.setState((prev) => ({
      categoriesList: [...prev.categoriesList, category],
    }));
  };

  render() {
    const {
      isOpenCatlList,
      day,
      time,
      category,
      currency,
      sum,
      comment,
      categoriesList,
    } = this.state;
    const { transType, handleGoBack } = this.props;
    console.log(categoriesList);
    const categoryValue =
      categoriesList.find(({ name }) => this.state.category === name)?.title ||
      categoriesList[0].title;

    return (
      <>
        <GoBackHeader
          handleGoBack={!isOpenCatlList ? handleGoBack : this.toggleCatList}
          title={
            isOpenCatlList
              ? "Категории"
              : transType === "incomes"
              ? "Доходы"
              : "Расходы"
          }
        />
        {!isOpenCatlList ? (
          <form onSubmit={this.handleSubmit}>
            <Button type="submit" title="Ok" />{" "}
            {this.state.isLoading && (
              <Loader
                type="Puff"
                color="#00BFFF"
                height={30}
                width={30}
                timeout={3000} //3 secs
              />
            )}
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
              value={categoryValue}
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
            handleChange={this.handleChange}
            currCategory={this.state.category}
            deleteCategory={this.deleteCategory}
            addCategory={this.addCategory}
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
