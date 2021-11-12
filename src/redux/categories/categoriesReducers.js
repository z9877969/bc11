import { combineReducers } from "redux";
import {
  ADD_COSTS,
  ADD_INCOMES,
  REMOVE_COSTS,
  REMOVE_INCOMES,
} from "./categoriesConstants";
const costsCategoriesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_COSTS:
      return [...state, payload];
    case REMOVE_COSTS:
      return state.filter((item) => item.name !== payload);

    default:
      return state;
  }
};
const incomesCategoriesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_INCOMES:
      return [...state, payload];
    case REMOVE_INCOMES:
      return state.filter((item) => item.name !== payload);

    default:
      return state;
  }
};
const categoriesReducers = combineReducers({
  costs: costsCategoriesReducer,
  incomes: incomesCategoriesReducer,
});

export default categoriesReducers;
