import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  takeEvery,
} from "redux-saga/effects";
import {
  addWallet,
  AddWalletRes,
  updateWallet,
  UpdateWalletRes,
} from "src/apis/wallet";
import * as actions from "./WalletModal.actions";
import * as types from "./WalletModal.types";
import { getWallets } from "../../Wallets.actions";
import { getWallet } from "../WalletItem/WalletItem.actions";

function* onAddWallet({ payload, callback }: types.AddWalletAction) {
  yield put(actions.addWalletRequest());
  try {
    const res: AddWalletRes = yield call(addWallet, payload);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.addWalletFailure({ msg: res.message }));
      return;
    }

    // Success
    yield put(actions.addWalletSuccess(res.data));
    yield put(getWallets());
    callback && callback("success");
  } catch (err) {
    yield put(actions.addWalletFailure(err.response.data.data));
    callback && callback("error");
  }
}

function* onUpdateWallet({
  payload: { id, data },
  callback,
}: types.UpdateWalletAction) {
  yield put(actions.updateWalletRequest());
  try {
    const res: UpdateWalletRes = yield call(updateWallet, id, data);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.updateWalletFailure({ msg: res.message }));
      return;
    }

    // Success
    yield put(actions.updateWalletSuccess(res.data));
    yield put(getWallets());
    yield put(getWallet(res.data.id));
    callback && callback("success");
  } catch (err) {
    yield put(actions.updateWalletFailure(err.response.data.data));
    callback && callback("error");
  }
}

export default function* addWalletSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([
    takeEvery(types.ADD_WALLET, onAddWallet),
    takeEvery(types.UPDATE_WALLET, onUpdateWallet),
  ]);
}
