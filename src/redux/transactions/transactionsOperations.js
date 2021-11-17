import { addTransactionApi } from "../../services/api";
import {
  addCostsError,
  addCostsRequest,
  addCostsSuccess,
  addIncomesError,
  addIncomesRequest,
  addIncomesSuccess,
} from "./transactionsActions";

export const addTranction =
  ({ transaction, transType }) =>
  (dispatch) => {
    transType === "incomes"
      ? dispatch(addIncomesRequest())
      : dispatch(addCostsRequest());

    addTransactionApi({ transaction, transType })
      .then((transaction) =>
        transType === "incomes"
          ? dispatch(addIncomesSuccess(transaction))
          : dispatch(addCostsSuccess(transaction))
      )
      .catch((err) =>
        transType === "incomes"
          ? dispatch(addIncomesError(err.message))
          : dispatch(addCostsError(err.message))
      );
  };
