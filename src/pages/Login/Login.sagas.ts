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
      yield put(
        actions.loginFailure({ errors: [{ msg: res.message, param: "Error" }] })
      );
      return;
    }

    // Set token
    const { token } = res.data;
    setAuthToken(token);

    // Success
    yield put(actions.loginSuccess(res.data.user));
    // forwardTo("/home");
  } catch (err) {
    console.log("error");
    console.log(actions.loginFailure(err.response.data));
    yield put(actions.loginFailure(err.response.data));
  }
}

function* watchOnLogin() {
  yield takeEvery(types.LOGIN, onLogin);
}

export default function* loginSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(watchOnLogin)]);
}