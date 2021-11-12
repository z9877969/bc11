import {
  ADD_COSTS,
  ADD_INCOMES,
  REMOVE_COSTS,
  REMOVE_INCOMES,
} from "./categoriesConstants";

export const addCostsCategory = (category) => {
  return {
    type: ADD_COSTS,
    payload: category,
  };
};
export const addIncomesCategory = (category) => {
  return {
    type: ADD_INCOMES,
    payload: category,
  };
};
export const removeCostsCategory = (id) => {
  return {
    type: REMOVE_COSTS,
    payload: id,
  };
};
export const removeIncomesCategory = (id) => {
  return {
    type: REMOVE_INCOMES,
    payload: id,
  };
};
