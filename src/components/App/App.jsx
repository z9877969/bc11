import { useContext, useEffect, useState } from "react";
import { baseContext } from "../../context/BaseProvider";
import { getTransactionsApi } from "../../services/api";
import MainPage from "../_pages/MainPage/MainPage";
import TransactionPage from "../_pages/TransactionPage/TransactionPage";
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
  switch (activePage) {
    case "costs":
      return (
        <TransactionPage
          transType={"costs"}
          addTransaction={addTransaction}
          setError={setError}
        />
      );
    case "incomes":
      return (
        <TransactionPage
          transType={"incomes"}
          addTransaction={addTransaction}
          setError={setError}
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
      return <MainPage />;
  }
};

export default App;
