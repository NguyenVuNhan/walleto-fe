import { combineReducers } from "redux";
import { categoriesReducer } from "src/pages/Categories";
import {
  transactionReducer,
  transactionsReducer,
} from "src/pages/Transactions";
import authReducer from "./authReducer";
import errorsReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  errors: errorsReducer,
  transactions: transactionsReducer,
  transaction: transactionReducer,
  categories: categoriesReducer,
});

export default rootReducer;
