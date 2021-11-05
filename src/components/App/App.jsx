import { Component } from "react";
import { getTransactionsApi } from "../../services/api";
import MainPage from "../_pages/MainPage/MainPage";
import TransactionPage from "../_pages/TransactionPage/TransactionPage";
import "./App.css";

class App extends Component {
  state = {
    activePage: "", // costs || incomes || balance
    incomes: [],
    costs: [],
    error: null,
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const costs = await getTransactionsApi("costs");
      this.setState({ costs });
      const incomes = await getTransactionsApi("incomes");
      this.setState({ incomes });
    } catch (err) {
      this.setError(err);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  setError = (err) => this.setState({ error: err });

  handleTogglePage = (activePageProp = "") => {
    this.setState({ activePage: activePageProp });
  };

  addTransaction = ({ transaction, transType }) => {
    // costs || incomes
    this.setState((prevState) => ({
      [transType]: [...prevState[transType], transaction],
    }));
  };

  render() {
    const { activePage, costs, incomes, error, isLoading } = this.state;
    if (error) return <h1>{error}</h1>;
    if (isLoading) return <h1>Loading...</h1>;
    switch (activePage) {
      case "costs":
        return (
          <TransactionPage
            handleGoBack={this.handleTogglePage}
            transType={"costs"}
            addTransaction={this.addTransaction}
            setError={this.setError}
          />
        );
      case "incomes":
        return (
          <TransactionPage
            handleGoBack={this.handleTogglePage}
            transType={"incomes"}
            addTransaction={this.addTransaction}
            setError={this.setError}
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
