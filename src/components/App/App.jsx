import { useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { baseContext } from "../../context/BaseProvider";
import { getTransactionsApi } from "../../services/api";
import BalancePage from "../../pages/BalancePage";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import TransactionsHistoryPage from "../../pages/TransactionsHistoryPage";
import "./App.css";

const App = () => {
  const [incomes, setIncomes] = useState([]);
  const [costs, setCosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { activePage } = useContext(baseContext);

  useEffect(() => {
    const getTransactions = async () => {
      setIsLoading(true);
      try {
        const costs = await getTransactionsApi("costs");
        setCosts(costs);
        const incomes = await getTransactionsApi("incomes");
        setIncomes(incomes);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getTransactions();
  }, []);

  const addTransaction = ({ transaction, transType }) => {
    if (transType === "costs") {
      setCosts((prev) => [...prev, transaction]);
    }
    if (transType === "incomes") {
      setIncomes((prev) => [...prev, transaction]);
    }
  };
  if (error) return <h1>{error.message}</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/transaction/:transType">
        <TransactionPage addTransaction={addTransaction} setError={setError} />
      </Route>
      <Route path="/balance">
        <BalancePage costs={costs} incomes={incomes} />
      </Route>
      <Route path="/history/:transType">
        <TransactionsHistoryPage />
      </Route>
    </Switch>
  );
};

export default App;
