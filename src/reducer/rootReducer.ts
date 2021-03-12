import { combineReducers } from "redux";
import { transactionsReducer, TransactionsState } from "src/pages/Transactions";
import authReducer, { AuthState } from "./authReducer";
import errorReducer, { ErrorState } from "./errorReducer";
import loadingReducer, { LoadingState } from "./loadingReducer";

export interface RootState {
  auth: AuthState;
  loading: LoadingState;
  error: ErrorState;
  transactions: TransactionsState;
}

export default combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  error: errorReducer,
  transactions: transactionsReducer,
});
