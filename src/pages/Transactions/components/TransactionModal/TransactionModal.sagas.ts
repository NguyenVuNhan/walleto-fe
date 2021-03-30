import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  takeEvery,
} from "redux-saga/effects";
import {
  addTransaction,
  AddTransactionRes,
  updateTransaction,
  UpdateTransactionRes,
} from "src/apis/transaction";
import * as actions from "./TransactionModal.actions";
import * as types from "./TransactionModal.types";
import { getTransactions } from "../../Transactions.actions";
import { getTransaction } from "../TransactionItem/TransactionItem.actions";

function* onAddTransaction({ payload, callback }: types.AddTransactionAction) {
  yield put(actions.addTransactionRequest());
  try {
    const res: AddTransactionRes = yield call(addTransaction, payload);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.addTransactionFailure({ msg: res.message }));
      return;
    }

    // Success
    yield put(actions.addTransactionSuccess(res.data));
    yield put(getTransactions());
    callback && callback("success");
  } catch (err) {
    yield put(actions.addTransactionFailure(err.response.data.data));
    callback && callback("error");
  }
}

function* onUpdateTransaction({
  payload: { id, data },
  callback,
}: types.UpdateTransactionAction) {
  yield put(actions.updateTransactionRequest());
  try {
    const res: UpdateTransactionRes = yield call(updateTransaction, id, data);

    // validate response
    if (!res.success || !res.data) {
      yield put(actions.updateTransactionFailure({ msg: res.message }));
      return;
    }

    // Success
    yield put(actions.updateTransactionSuccess(res.data));
    yield put(getTransactions());
    yield put(getTransaction(res.data.id));
    callback && callback("success");
  } catch (err) {
    yield put(actions.updateTransactionFailure(err.response.data.data));
    callback && callback("error");
  }
}

export default function* addTransactionSaga(): Generator<
  AllEffect<ForkEffect>
> {
  yield all([
    takeEvery(types.ADD_TRANSACTION, onAddTransaction),
    takeEvery(types.UPDATE_TRANSACTION, onUpdateTransaction),
  ]);
}
