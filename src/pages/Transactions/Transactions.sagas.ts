import * as types from "./Transactions.types";
import * as actions from "./Transactions.actions";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { getTransactions, GetTransactionsRes } from "src/apis/transaction";
import { watchOnGetTransaction } from "./components/TransactionItem";

function* onGetTransactions({ payload }: types.GetTransactionsAction) {
  yield put(actions.getTransactionsRequest());
  try {
    const res: GetTransactionsRes = yield call(
      getTransactions,
      payload.from,
      payload.to
    );

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.getTransactionsFailure({ msg: res.message }));
      return;
    }

    yield put(actions.getTransactionsSuccess(res.data.transactions));
  } catch (err) {
    yield put(actions.getTransactionsFailure(err.response.data.data));
  }
}

function* watchOnGetTransactions() {
  yield takeEvery(types.GET_TRANSACTIONS, onGetTransactions);
}

export default function* transactionsSaga() {
  yield all([fork(watchOnGetTransactions), fork(watchOnGetTransaction)]);
}
