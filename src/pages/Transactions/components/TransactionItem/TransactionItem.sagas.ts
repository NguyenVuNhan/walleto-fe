import * as types from "./TransactionItem.types";
import * as actions from "./TransactionItem.actions";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  deleteTransaction,
  getTransaction,
  GetTransactionRes,
} from "src/apis/transaction";
import { getTransactions } from "../../Transactions.actions";

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
    yield put(actions.getTransactionFailure(err.response.data.data));
  }
}

function* onDeleteTransaction({ payload }: types.DeleteTransactionAction) {
  yield put(actions.deleteTransactionRequest());
  try {
    const res: GetTransactionRes = yield call(deleteTransaction, payload.id);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.deleteTransactionFailure({ msg: res.message }));
      return;
    }

    yield put(actions.deleteTransactionSuccess(res.data));
    yield put(getTransactions());
  } catch (err) {
    yield put(actions.deleteTransactionFailure(err.response.data.data));
  }
}

function* watchOnGetTransaction() {
  yield takeEvery(types.GET_TRANSACTION, onGetTransaction);
}

function* watchOnDeleteTransaction() {
  yield takeEvery(types.DELETE_TRANSACTION, onDeleteTransaction);
}

export default function* transactionSaga() {
  yield all([fork(watchOnGetTransaction), fork(watchOnDeleteTransaction)]);
}
