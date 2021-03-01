import { combineReducers } from "redux";
import authReducer from "./authReducer";

export interface IRootState {}

export default combineReducers({
  auth: authReducer,
});
