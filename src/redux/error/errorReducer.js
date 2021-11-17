import { createReducer } from "@reduxjs/toolkit";
import {
  addCostsError,
  addCostsRequest,
  addIncomesError,
  addIncomesRequest,
} from "../transactions/transactionsActions";

const setError = (_, { payload }) => payload;
const resetError = () => null;

const errorReducer = createReducer(null, {
  [addIncomesError]: setError,
  [addIncomesRequest]: resetError,
  [addCostsError]: setError,
  [addCostsRequest]: resetError,
});

export default errorReducer;
