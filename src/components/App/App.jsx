import { Component } from "react";
import MainPage from "../_pages/MainPage/MainPage";
import TransactionPage from "../_pages/TransactionPage/TransactionPage";
import "./App.css";

class App extends Component {
  state = {
    activePage: "", // costs || incomes || balance
  };

  handleTogglePage = (activePageProp = "") => {
    this.setState({ activePage: activePageProp });
  };

  render() {
    const { activePage } = this.state;
    switch (activePage) {
      case "costs":
        return (
          <TransactionPage
            handleGoBack={this.handleTogglePage}
            transType={"costs"}
          />
        );
      case "incomes":
        return (
          <TransactionPage
            handleGoBack={this.handleTogglePage}
            transType={"incomes"}
          />
        );
      case "balance":
        return <h1>Balance</h1>;
      default:
        return <MainPage handleOpenPageFromApp={this.handleTogglePage} />;
    }
  }
}

export default App;
