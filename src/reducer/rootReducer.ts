import { combineReducers } from "redux";
import { categoriesReducer } from "src/pages/Categories";
import {
  transactionReducer,
  transactionsReducer,
} from "src/pages/Transactions";
import { walletReducer, walletsReducer } from "src/pages/Wallets";
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
  wallets: walletsReducer,
  wallet: walletReducer,
});

export default rootReducer;
