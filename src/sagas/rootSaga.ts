import { loginSaga } from "src/pages/Login";
import { registerSaga } from "src/pages/Register";
import { all, AllEffect, fork, ForkEffect } from "redux-saga/effects";

function* authSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(loginSaga), fork(registerSaga)]);
}

export default function* rootSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(authSaga)]);
}
