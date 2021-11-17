import { configureStore } from "@reduxjs/toolkit";
import categoriesReducers from "./categories/categoriesReducers";
import transactions from "./transactions/transactionsReducers";

export const store = configureStore({
  reducer: {
    categories: categoriesReducers,
    transactions,
  },
});

