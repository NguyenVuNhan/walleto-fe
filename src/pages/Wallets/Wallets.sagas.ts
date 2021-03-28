import {
  all,
  AllEffect,
  call,
  fork,
  ForkEffect,
  put,
  takeEvery,
} from "redux-saga/effects";
import {
  deleteWallet,
  DeleteWalletRes,
  getWallets,
  GetWalletsRes,
} from "src/apis/wallet";
import * as actions from "./Wallets.actions";
import * as types from "./Wallets.types";
import { addWalletSaga } from "./components/WalletModal";
import { walletSaga } from "./components/WalletItem";

function* onGetWallet(_: types.GetWalletsAction) {
  yield put(actions.getWalletsRequest());
  try {
    const res: GetWalletsRes = yield call(getWallets);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.getWalletsFailure({ msg: res.message }));
      return;
    }

    // Success
    yield put(actions.getWalletsSuccess(res.data.wallets));
  } catch (err) {
    yield put(actions.getWalletsFailure(err.response.data.data));
  }
}

export default function* walletsSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([
    takeEvery(types.GET_WALLETS, onGetWallet),
    fork(addWalletSaga),
    fork(walletSaga),
  ]);
}
