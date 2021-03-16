import { forwardTo } from "src/helpers/router";
import { clearAuthToken } from "src/helpers/auth";
import {
  all,
  AllEffect,
  fork,
  ForkEffect,
  put,
  takeEvery,
} from "redux-saga/effects";
import * as actions from "./Header.actions";
import * as types from "./Header.types";

function* onLogout(_: types.LogoutAction) {
  yield put(actions.logoutRequest());
  try {
    clearAuthToken();
    yield put(actions.logoutSuccess());
    forwardTo("/login");
  } catch (err) {
    yield put(
      actions.logoutFailure({ msg: "Unable to logout. Please try again!" })
    );
  }
}

function* watchOnLogout() {
  yield takeEvery(types.LOGOUT, onLogout);
}

export default function* logoutSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(watchOnLogout)]);
}
