import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import categoriesReducers from "./categories/categoriesReducers";

const reducer = combineReducers({
  categories: categoriesReducers,
});
export const store = createStore(reducer, composeWithDevTools());
