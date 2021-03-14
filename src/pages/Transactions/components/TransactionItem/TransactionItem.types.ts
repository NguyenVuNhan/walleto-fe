export const GET_TRANSACTION = "auth/getTransaction/GET_TRANSACTION";
export interface GetTransactionAction {
  type: typeof GET_TRANSACTION;
  payload: { id: number };
}

export const GET_TRANSACTION_REQUEST =
  "auth/getTransaction/GET_TRANSACTION_REQUEST";
export type GetTransactionRequestAction = BaseRequestAction<
  typeof GET_TRANSACTION_REQUEST
>;

export const GET_TRANSACTION_SUCCESS =
  "auth/getTransaction/GET_TRANSACTION_SUCCESS";
export type GetTransactionSuccessAction = BaseSuccessAction<
  typeof GET_TRANSACTION_SUCCESS,
  Transaction
>;

export const GET_TRANSACTION_FAILURE =
  "auth/getTransaction/GET_TRANSACTION_FAILURE";
export type GetTransactionFailureAction = BaseFailureAction<
  typeof GET_TRANSACTION_FAILURE
>;

export type GetTransactionActionType =
  | GetTransactionAction
  | GetTransactionRequestAction
  | GetTransactionSuccessAction
  | GetTransactionFailureAction;
