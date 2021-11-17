import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addCostsError,
  addCostsRequest,
  addCostsSuccess,
  addIncomesError,
  addIncomesRequest,
  addIncomesSuccess,
} from "../transactions/transactionsActions";

const loaderOn = () => true;
const loaderOff = () => false;

const isLoadingReducer = createReducer(false, {
  [addCostsRequest]: loaderOn,
  [addIncomesRequest]: loaderOn,
  [addCostsSuccess]: loaderOff,
  [addIncomesSuccess]: loaderOff,
  [addCostsError]: loaderOff,
  [addIncomesError]: loaderOff,
});

export default combineReducers({
  value: isLoadingReducer,
});
