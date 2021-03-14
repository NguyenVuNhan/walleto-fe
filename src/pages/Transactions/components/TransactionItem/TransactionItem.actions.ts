import * as types from "./TransactionItem.types";

export const getTransaction = (id: number): types.GetTransactionAction => ({
  type: types.GET_TRANSACTION,
  payload: { id },
});

export const getTransactionRequest = (): types.GetTransactionRequestAction => ({
  type: types.GET_TRANSACTION_REQUEST,
});

export const getTransactionSuccess = (
  payload: Transaction
): types.GetTransactionSuccessAction => ({
  type: types.GET_TRANSACTION_SUCCESS,
  payload,
});

export const getTransactionFailure = (
  error: BaseError
): types.GetTransactionFailureAction => ({
  type: types.GET_TRANSACTION_FAILURE,
  error,
});
