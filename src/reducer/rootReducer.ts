import { combineReducers } from "redux";
import { transactionsReducer } from "src/pages/Transactions";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  error: errorReducer,
  transactions: transactionsReducer,
});
