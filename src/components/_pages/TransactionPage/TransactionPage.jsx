import { Component, useState } from "react";
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

const TransactionPage = ({
  transType,
  handleGoBack,
  addTransaction,
  setError,
}) => {
  const [day, setDay] = useState("2021-10-29");
  const [time, setTime] = useState("16:15");
  const [category, setCategory] = useState(
    transType === "incomes" ? "salary" : "foods"
  );
  const [sum, setSum] = useState("");
  const [currency, setCurrency] = useState("UAH");
  const [comment, setComment] = useState("");
  const [isOpenCatList, setIsOpenCatList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesList, setCategoriesList] = useState(
    transType === "costs" ? costsCategories : incomesCategories
  );

  const toggleCatList = () => setIsOpenCatList((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "day":
        setDay(value);
        return;
      case "time":
        setTime(value);
        return;
      case "category":
        setCategory(value);
        setIsOpenCatList(false);
        return;
      case "sum":
        setSum(value);
        return;
      case "currency":
        setCurrency(value);
        return;
      case "comment":
        setComment(value);
        return;
      default:
        return;
    }
  };

  const toggleLoader = () => {
    setIsLoading((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      day,
      time,
      category,
      sum,
      currency,
      comment,
    };
    toggleLoader();
    addTransactionApi({ transaction, transType })
      .then((transaction) => addTransaction({ transaction, transType }))
      .catch((err) => setError(err.message))
      .finally(() => toggleLoader());
  };

  const deleteCategory = (id) =>
    setCategoriesList((prev) =>
      prev.filter((category) => category.name !== id)
    );

  const addCategory = (category) =>
    setCategoriesList((prev) => [...prev, category]);

  const categoryValue =
    categoriesList.find(({ name }) => category === name)?.title ||
    categoriesList[0].title;

  return (
    <>
      <GoBackHeader
        handleGoBack={!isOpenCatList ? handleGoBack : toggleCatList}
        title={
          isOpenCatList
            ? "Категории"
            : transType === "incomes"
            ? "Доходы"
            : "Расходы"
        }
      />
      {!isOpenCatList ? (
        <form onSubmit={handleSubmit}>
          <Button type="submit" title="Ok" />{" "}
          {isLoading && (
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
            cbOnChange={handleChange}
          />
          <LabelInput
            value={time}
            title={"Время"}
            name={"time"}
            type={"time"}
            cbOnChange={handleChange}
          />
          <LabelInput
            title={"Категория"}
            name={"category"}
            type={"button"}
            value={categoryValue}
            cbOnClick={toggleCatList}
          />
          <LabelInput
            title={"Сумма"}
            name={"sum"}
            placeholder={"Введите сумму"}
            value={sum}
            cbOnChange={handleChange}
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
            cbOnChange={handleChange}
          />
        </form>
      ) : (
        <CategoriesList
          categoriesList={categoriesList}
          handleChange={handleChange}
          currCategory={category}
          deleteCategory={deleteCategory}
          addCategory={addCategory}
        />
      )}
    </>
  );
};

TransactionPage.propTypes = {
  transType: PropTypes.string.isRequired,
  handleGoBack: PropTypes.func.isRequired,
  addTransaction: PropTypes.func.isRequired,
};

export default TransactionPage;
