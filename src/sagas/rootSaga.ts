import { loginSaga } from "src/pages/Login";
import { registerSaga } from "src/pages/Register";
import { all, AllEffect, fork, ForkEffect } from "redux-saga/effects";
import { transactionsSaga } from "src/pages/Transactions";
import { logoutSaga } from "src/components/organisms/Header";
import { categoriesSaga } from "src/pages/Categories";
import { walletSaga } from "src/pages/Wallets";

function* authSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(loginSaga), fork(registerSaga), fork(logoutSaga)]);
}

export default function* rootSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([
    fork(authSaga),
    fork(transactionsSaga),
    fork(categoriesSaga),
    fork(walletSaga),
  ]);
}
