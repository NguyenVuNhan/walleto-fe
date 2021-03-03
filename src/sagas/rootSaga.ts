import { loginSaga } from "src/pages/Login";
import { all, AllEffect, fork, ForkEffect } from "redux-saga/effects";

export default function* rootSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(loginSaga)]);
}
