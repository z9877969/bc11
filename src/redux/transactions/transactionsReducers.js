import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addIncomes,
  addCosts,
  getIncomes,
  getCosts,
} from "./transactionsActions";

const incomesReducer = createReducer([], {
  [addIncomes]: (state, { payload }) => [...state, payload],
  [getIncomes]: (_, { payload }) => payload,
});

const costsReducer = createReducer([], {
  [addCosts]: (state, { payload }) => [...state, payload],
  [getCosts]: (_, { payload }) => payload,
});

const transactionsReducer = combineReducers({
  incomes: incomesReducer,
  costs: costsReducer,
});

export default transactionsReducer;
