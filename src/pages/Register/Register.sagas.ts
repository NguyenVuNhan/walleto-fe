import { forwardTo } from "src/helpers/router";
import {
  all,
  AllEffect,
  call,
  fork,
  ForkEffect,
  put,
  takeEvery,
} from "redux-saga/effects";
import { register, RegisterResponseData } from "src/apis/auth";
import * as actions from "./Register.actions";
import * as types from "./Register.types";

function* onRegister({ payload }: types.RegisterAction) {
  yield put(actions.registerRequest());
  try {
    const res: RegisterResponseData = yield call(register, payload);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.registerFailure({ msg: res.message }));
      return;
    }

    // Success
    yield put(actions.registerSuccess(res.data.user));
    forwardTo("/login");
  } catch (err) {
    yield put(actions.registerFailure(err.response.data.data));
  }
}

function* watchOnRegister() {
  yield takeEvery(types.REGISTER, onRegister);
}

export default function* registerSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(watchOnRegister)]);
}
