import { combineReducers } from "redux";
import authReducer, { AuthState } from "./authReducer";
import errorReducer, { ErrorState } from "./errorReducer";
import loadingReducer, { LoadingState } from "./loadingReducer";

export interface RootState {
  auth: AuthState;
  loading: LoadingState;
  error: ErrorState;
}

export default combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  error: errorReducer,
});
