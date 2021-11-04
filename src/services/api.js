import axios from "axios";

const addCosts = () => {};

const addIncomes = () => {};

axios.defaults.baseURL = "http://localhost:3004/";

export const addTransactionApi = ({ transaction, transType }) => {
  return axios
    .post(transType, transaction)
    .then(({ data }) => data)
    .catch((err) => {
      //   alert(err.message);
      throw err;
    });
};

export const getTransactionsApi = (transType) => {
  return axios
    .get(transType)
    .then(({ data }) => data)
    .catch((err) => {
      //   alert(err.message);
      throw err;
    });
};
