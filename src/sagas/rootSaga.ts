import { loginSaga } from "src/pages/Login";
import { registerSaga } from "src/pages/Register";
import { all, AllEffect, fork, ForkEffect } from "redux-saga/effects";
import transactionsSaga from "src/pages/Transactions/Transactions.sagas";

function* authSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(loginSaga), fork(registerSaga)]);
}

function* transactionSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(transactionsSaga)]);
}

export default function* rootSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(authSaga), fork(transactionSaga)]);
}
