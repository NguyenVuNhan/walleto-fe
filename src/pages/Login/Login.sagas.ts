import { forwardTo } from "src/helpers/router";
import { setAuthToken } from "src/helpers/auth";
import {
  all,
  AllEffect,
  call,
  fork,
  ForkEffect,
  put,
  takeEvery,
} from "redux-saga/effects";
import { login, LoginResponseData } from "src/apis/auth";
import * as actions from "./Login.actions";
import * as types from "./Login.types";

function* onLogin({ payload }: types.LoginAction) {
  yield put(actions.loginRequest());
  try {
    const res: LoginResponseData = yield call(login, payload);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.loginFailure({ msg: res.message }));
      return;
    }

    // Set token
    const { token } = res.data;
    setAuthToken(token);

    // Success
    yield put(actions.loginSuccess(res.data.user));
    forwardTo("/");
  } catch (err) {
    yield put(actions.loginFailure(err.response.data.data));
  }
}

function* watchOnLogin() {
  yield takeEvery(types.LOGIN, onLogin);
}

export default function* loginSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(watchOnLogin)]);
}
