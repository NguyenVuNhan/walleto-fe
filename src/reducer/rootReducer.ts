import { combineReducers } from "redux";
import {
  transactionReducer,
  transactionsReducer,
} from "src/pages/Transactions";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  error: errorReducer,
  transactions: transactionsReducer,
  transaction: transactionReducer,
});

export default rootReducer;
