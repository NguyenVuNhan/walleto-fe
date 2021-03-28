import * as types from "./WalletItem.types";
import * as actions from "./WalletItem.actions";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { deleteWallet, getWallet, GetWalletRes } from "src/apis/wallet";
import { getWallets } from "../../Wallets.actions";

function* onGetWallet({ payload }: types.GetWalletAction) {
  yield put(actions.getWalletRequest());
  try {
    const res: GetWalletRes = yield call(getWallet, payload.id);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.getWalletFailure({ msg: res.message }));
      return;
    }

    yield put(actions.getWalletSuccess(res.data));
  } catch (err) {
    yield put(actions.getWalletFailure(err.response.data.data));
  }
}

function* onDeleteWallet({ payload }: types.DeleteWalletAction) {
  yield put(actions.deleteWalletRequest());
  try {
    const res: GetWalletRes = yield call(deleteWallet, payload.id);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.deleteWalletFailure({ msg: res.message }));
      return;
    }

    yield put(actions.deleteWalletSuccess(res.data));
    yield put(getWallets());
  } catch (err) {
    yield put(actions.deleteWalletFailure(err.response.data.data));
  }
}

export default function* walletSaga() {
  yield all([
    takeEvery(types.GET_WALLET, onGetWallet),
    takeEvery(types.DELETE_WALLET, onDeleteWallet),
  ]);
}
