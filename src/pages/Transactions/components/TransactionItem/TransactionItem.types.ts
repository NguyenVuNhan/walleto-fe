// Get transaction
export const GET_TRANSACTION = "transaction/getTransaction/GET_TRANSACTION";
export interface GetTransactionAction {
  type: typeof GET_TRANSACTION;
  payload: { id: number };
}

export const GET_TRANSACTION_REQUEST =
  "transaction/getTransaction/GET_TRANSACTION_REQUEST";
export type GetTransactionRequestAction = BaseRequestAction<
  typeof GET_TRANSACTION_REQUEST
>;

export const GET_TRANSACTION_SUCCESS =
  "transaction/getTransaction/GET_TRANSACTION_SUCCESS";
export type GetTransactionSuccessAction = BaseSuccessAction<
  typeof GET_TRANSACTION_SUCCESS,
  Transaction
>;

export const GET_TRANSACTION_FAILURE =
  "transaction/getTransaction/GET_TRANSACTION_FAILURE";
export type GetTransactionFailureAction = BaseFailureAction<
  typeof GET_TRANSACTION_FAILURE
>;

export type GetTransactionActionType =
  | GetTransactionAction
  | GetTransactionRequestAction
  | GetTransactionSuccessAction
  | GetTransactionFailureAction;

// Delete transaction
export const DELETE_TRANSACTION =
  "transaction/deleteTransaction/DELETE_TRANSACTION";
export interface DeleteTransactionAction {
  type: typeof DELETE_TRANSACTION;
  payload: { id: number };
}

export const DELETE_TRANSACTION_REQUEST =
  "transaction/deleteTransaction/DELETE_TRANSACTION_REQUEST";
export type DeleteTransactionRequestAction = BaseRequestAction<
  typeof DELETE_TRANSACTION_REQUEST
>;

export const DELETE_TRANSACTION_SUCCESS =
  "transaction/deleteTransaction/DELETE_TRANSACTION_SUCCESS";
export type DeleteTransactionSuccessAction = BaseSuccessAction<
  typeof DELETE_TRANSACTION_SUCCESS,
  Transaction
>;

export const DELETE_TRANSACTION_FAILURE =
  "transaction/deleteTransaction/DELETE_TRANSACTION_FAILURE";
export type DeleteTransactionFailureAction = BaseFailureAction<
  typeof DELETE_TRANSACTION_FAILURE
>;

export type DeleteTransactionActionType =
  | DeleteTransactionAction
  | DeleteTransactionRequestAction
  | DeleteTransactionSuccessAction
  | DeleteTransactionFailureAction;
