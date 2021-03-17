import * as types from "./TransactionItem.types";

// get actions
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

//Delete actions
export const deleteTransaction = (
  id: number
): types.DeleteTransactionAction => ({
  type: types.DELETE_TRANSACTION,
  payload: { id },
});

export const deleteTransactionRequest = (): types.DeleteTransactionRequestAction => ({
  type: types.DELETE_TRANSACTION_REQUEST,
});

export const deleteTransactionSuccess = (
  payload: Transaction
): types.DeleteTransactionSuccessAction => ({
  type: types.DELETE_TRANSACTION_SUCCESS,
  payload,
});

export const deleteTransactionFailure = (
  error: BaseError
): types.DeleteTransactionFailureAction => ({
  type: types.DELETE_TRANSACTION_FAILURE,
  error,
});
