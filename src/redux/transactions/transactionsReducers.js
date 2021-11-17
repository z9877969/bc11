import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getIncomes,
  getCosts,
  addIncomesSuccess,
  addCostsSuccess,
} from "./transactionsActions";

const incomesReducer = createReducer([], {
  [addIncomesSuccess]: (state, { payload }) => [...state, payload],
  [getIncomes]: (_, { payload }) => payload,
});

const costsReducer = createReducer([], {
  [addCostsSuccess]: (state, { payload }) => [...state, payload],
  [getCosts]: (_, { payload }) => payload,
});

const transactionsReducer = combineReducers({
  incomes: incomesReducer,
  costs: costsReducer,
});

export default transactionsReducer;

// const actionFn = (n) => ({
//   type: "type",
//   payload: n,
// });

// const obj = { [actionFn]: (state, action) => state + action };

// const createRreducer =
//   (iS, obj) =>
//   (state = iS, action) => {
//     switch (action.type) {
//       case actionFn().type:
//         return ;
//     }
//   };

// const filterMethod =  
