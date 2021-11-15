import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import categoriesReducers from "./categories/categoriesReducers";
import transactions from "./transactions/transactionsReducers";

// const reducer = combineReducers({
//   categories: categoriesReducers,
// });

export const store = configureStore({
  reducer: {
    categories: categoriesReducers,
    transactions,
  },
});

// export const store = createStore(reducer, composeWithDevTools());
