import * as types from "./Transactions.types";

export const getTransactions = (
  from?: string,
  to?: string
): types.GetTransactionsAction => ({
  type: types.GET_TRANSACTIONS,
  payload: { from, to },
});

export const getTransactionsRequest = (): types.GetTransactionsRequestAction => ({
  type: types.GET_TRANSACTIONS_REQUEST,
});

export const getTransactionsSuccess = (
  payload: ShortTransaction[]
): types.GetTransactionsSuccessAction => ({
  type: types.GET_TRANSACTIONS_SUCCESS,
  payload,
});

export const getTransactionsFailure = (
  error: BaseError
): types.GetTransactionsFailureAction => ({
  type: types.GET_TRANSACTIONS_FAILURE,
  error,
});
