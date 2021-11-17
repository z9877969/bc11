import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import categoriesReducers from "./categories/categoriesReducers";
import transactions from "./transactions/transactionsReducers";
import isLoading from "./loader/loaderReducer";
import error from "./error/errorReducer";

const persistCategoriesConfig = {
  key: "categories",
  version: 1,
  storage,
};

const persistedCategoriesReducer = persistReducer(
  persistCategoriesConfig,
  categoriesReducers
);

export const store = configureStore({
  reducer: {
    categories: persistedCategoriesReducer,
    transactions,
    isLoading,
    error,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);

// const reducer = (state = [], action) => {
//   return state;
// };

// reducer1 -> reducer2.1
//             reducer2.2 -> reducer3.1
//                           reducer3.2

//                           r1 = {
//                             r2.1: reducer2.1 ,
//                             r2.2: {
//                               r3.1: reducer3.1,
//                               r3.2: reducer3.2
//                             }
//                           }
