import { combineReducers, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from "redux-devtools-extension";
import categoriesReducers from './categories/categoriesReducers';
import transactions from './transactions/transactionsReducers';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// const reducer = combineReducers({
//   categories: categoriesReducers,
// });
const persistCategoriesConfig = {
  key: 'categories',
  version: 1,
  storage,
};

const persistedCategoriesReducer = persistReducer(persistCategoriesConfig, categoriesReducers);
export const store = configureStore({
  reducer: {
    categories: persistedCategoriesReducer,
    transactions,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

