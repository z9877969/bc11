import { Component } from "react";
import CategoriesList from "../../CategoriesList/CategoriesList";
import GoBackHeader from "../../_shared/GoBackHeader/GoBackHeader";
import LabelInput from "../../_shared/LabelInput/LabelInput";
// { transType, handleGoBack }
class TransactionPage extends Component {
  state = {
    isCatList: false,
  };

  toggleCatList = () => {
    this.setState({ isCatList: !this.state.isCatList });
  };

  render() {
    const { isCatList } = this.state;
    const { transType, handleGoBack } = this.props;
    return (
      <>
        <GoBackHeader
          handleGoBack={!isCatList ? handleGoBack : this.toggleCatList}
          title={transType === "incomes" ? "Доходы" : "Расходы"}
        />
        {!isCatList ? (
          <form>
            <LabelInput title={"День"} name={"day"} type={"date"} />
            <LabelInput title={"Время"} name={"time"} type={"time"} />
            <LabelInput
              title={"Категория"}
              name={"category"}
              type={"button"}
              defaultValue={"Зарплата"}
              cbOnClick={this.toggleCatList}
            />
            <LabelInput
              title={"Сумма"}
              name={"sum"}
              placeholder={"Введите сумму"}
            />
            <LabelInput
              title={"Валюта"}
              name={"currency"}
              type={"button"}
              defaultValue={"UAH"}
            />
            <LabelInput name={"comment"} placeholder={"Комментарий"} />
          </form>
        ) : (
          <CategoriesList />
        )}
      </>
    );
  }
}

export default TransactionPage;
