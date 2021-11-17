import { useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { baseContext } from "../../context/BaseProvider";
import { getTransactionsApi } from "../../services/api";
import BalancePage from "../../pages/BalancePage";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import TransactionsHistoryPage from "../../pages/TransactionsHistoryPage";
import {
  getCosts,
  getIncomes,
} from "../../redux/transactions/transactionsActions";
import "./App.css";
import { getIsLoading } from "../../redux/loader/loaderSelectors";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingRedux = useSelector(getIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTransactions = async () => {
      setIsLoading(true);
      try {
        const costs = await getTransactionsApi("costs");
        dispatch(getCosts(costs));
        const incomes = await getTransactionsApi("incomes");
        dispatch(getIncomes(incomes));
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getTransactions();
  }, []);

  if (error) return <h1>{error.message}</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/transaction/:transType">
        <TransactionPage setError={setError} />
      </Route>
      <Route path="/balance">
        <BalancePage />
      </Route>
      <Route path="/history/:transType">
        <TransactionsHistoryPage />
      </Route>
    </Switch>
  );
};

export default App;
