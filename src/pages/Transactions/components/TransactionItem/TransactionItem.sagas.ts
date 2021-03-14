import * as types from "./TransactionItem.types";
import * as actions from "./TransactionItem.actions";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { getTransaction, GetTransactionRes } from "src/apis/transaction";

function* onGetTransaction({ payload }: types.GetTransactionAction) {
  yield put(actions.getTransactionRequest());
  try {
    const res: GetTransactionRes = yield call(getTransaction, payload.id);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.getTransactionFailure({ msg: res.message }));
      return;
    }

    yield put(actions.getTransactionSuccess(res.data));
  } catch (err) {
    console.log(err);
    yield put(actions.getTransactionFailure(err.response.data.data));
  }
}

export default function* watchOnGetTransaction() {
  yield takeEvery(types.GET_TRANSACTION, onGetTransaction);
}
