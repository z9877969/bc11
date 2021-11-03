import { Component } from "react";
import MainPage from "../_pages/MainPage/MainPage";
import TransactionPage from "../_pages/TransactionPage/TransactionPage";
import "./App.css";

class App extends Component {
  state = {
    activePage: "", // costs || incomes || balance
    incomes: [],
    costs: [],
  };

  componentDidMount() {
    const parsCosts = JSON.parse(localStorage.getItem("costs"));
    const parsIncomes = JSON.parse(localStorage.getItem("incomes"));
    this.setState({ costs: parsCosts || [] });
    this.setState({ incomes: parsIncomes || [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.incomes !== this.state.incomes) {
      localStorage.setItem("incomes", JSON.stringify(this.state.incomes));
    }
    if (prevState.costs !== this.state.costs) {
      localStorage.setItem("costs", JSON.stringify(this.state.costs));
    }
  }

  handleTogglePage = (activePageProp = "") => {
    this.setState({ activePage: activePageProp });
  };

  // addCosts = (transaction) => {
  //   this.setState((prevState) => ({
  //     costs: [...prevState.costs, transaction],
  //   }));
  // };

  addTransaction = ({ transaction, transType }) => {
    // costs || incomes
    this.setState((prevState) => ({
      [transType]: [...prevState[transType], transaction],
    }));
  };

  render() {
    const { activePage, costs, incomes } = this.state;
    switch (activePage) {
      case "costs":
        return (
          <TransactionPage
            handleGoBack={this.handleTogglePage}
            transType={"costs"}
            addTransaction={this.addTransaction}
          />
        );
      case "incomes":
        return (
          <TransactionPage
            handleGoBack={this.handleTogglePage}
            transType={"incomes"}
            addTransaction={this.addTransaction}
          />
        );
      case "balance":
        return (
          <>
            <h1>Balance</h1>
            <ul>
              {[...costs, ...incomes].map(
                ({ day, time, category, sum, currency, id }) => (
                  <li key={id}>
                    <span>{day}</span>
                    <span>{time}</span>
                    <span>{category}</span>
                    <span>{sum}</span>
                    <span>{currency}</span>
                  </li>
                )
              )}
            </ul>
          </>
        );
      default:
        return <MainPage handleOpenPageFromApp={this.handleTogglePage} />;
    }
  }
}

export default App;
