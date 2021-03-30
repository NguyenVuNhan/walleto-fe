import * as types from "./TransactionModal.types";

// Add transaction
export const addTransaction = (
  payload: TransactionForm,
  callback?: () => void
): types.AddTransactionAction => ({
  type: types.ADD_TRANSACTION,
  payload,
  callback,
});

export const addTransactionRequest = (): types.AddTransactionRequestAction => ({
  type: types.ADD_TRANSACTION_REQUEST,
});

export const addTransactionSuccess = (
  payload: Transaction
): types.AddTransactionSuccessAction => ({
  type: types.ADD_TRANSACTION_SUCCESS,
  payload,
});

export const addTransactionFailure = (
  error?: BaseError
): types.AddTransactionFailureAction => ({
  type: types.ADD_TRANSACTION_FAILURE,
  error,
});

// Update transaction
export const updateTransaction = (
  id: number,
  data: Partial<TransactionForm>,
  callback?: ActionCallback
): types.UpdateTransactionAction => ({
  type: types.UPDATE_TRANSACTION,
  payload: { id, data },
  callback,
});

export const updateTransactionRequest = (): types.UpdateTransactionRequestAction => ({
  type: types.UPDATE_TRANSACTION_REQUEST,
});

export const updateTransactionSuccess = (
  payload: Transaction
): types.UpdateTransactionSuccessAction => ({
  type: types.UPDATE_TRANSACTION_SUCCESS,
  payload,
});

export const updateTransactionFailure = (
  error?: BaseError
): types.UpdateTransactionFailureAction => ({
  type: types.UPDATE_TRANSACTION_FAILURE,
  error,
});
