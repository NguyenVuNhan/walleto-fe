// Add transaction
export const ADD_TRANSACTION = "transaction/addTransaction/ADD_TRANSACTION";
export interface AddTransactionAction {
  type: typeof ADD_TRANSACTION;
  payload: TransactionForm;
  callback?: ActionCallback;
}

export const ADD_TRANSACTION_REQUEST =
  "transaction/addTransaction/ADD_TRANSACTION_REQUEST";
export type AddTransactionRequestAction = BaseRequestAction<
  typeof ADD_TRANSACTION_REQUEST
>;

export const ADD_TRANSACTION_SUCCESS =
  "transaction/addTransaction/ADD_TRANSACTION_SUCCESS";
export type AddTransactionSuccessAction = BaseSuccessAction<
  typeof ADD_TRANSACTION_SUCCESS,
  Transaction
>;

export const ADD_TRANSACTION_FAILURE =
  "transaction/addTransaction/ADD_TRANSACTION_FAILURE";
export type AddTransactionFailureAction = BaseFailureAction<
  typeof ADD_TRANSACTION_FAILURE
>;

export type AddTransactionActionType =
  | AddTransactionAction
  | AddTransactionRequestAction
  | AddTransactionSuccessAction
  | AddTransactionFailureAction;

// Update transaction
export const UPDATE_TRANSACTION =
  "transaction/updateTransaction/UPDATE_TRANSACTION";
export interface UpdateTransactionAction {
  type: typeof UPDATE_TRANSACTION;
  payload: { id: number; data: Partial<TransactionForm> };
  callback?: ActionCallback;
}

export const UPDATE_TRANSACTION_REQUEST =
  "transaction/updateTransaction/UPDATE_TRANSACTION_REQUEST";
export type UpdateTransactionRequestAction = BaseRequestAction<
  typeof UPDATE_TRANSACTION_REQUEST
>;

export const UPDATE_TRANSACTION_SUCCESS =
  "transaction/updateTransaction/UPDATE_TRANSACTION_SUCCESS";
export type UpdateTransactionSuccessAction = BaseSuccessAction<
  typeof UPDATE_TRANSACTION_SUCCESS,
  Transaction
>;

export const UPDATE_TRANSACTION_FAILURE =
  "transaction/updateTransaction/UPDATE_TRANSACTION_FAILURE";
export type UpdateTransactionFailureAction = BaseFailureAction<
  typeof UPDATE_TRANSACTION_FAILURE
>;

export type UpdateTransactionActionType =
  | UpdateTransactionAction
  | UpdateTransactionRequestAction
  | UpdateTransactionSuccessAction
  | UpdateTransactionFailureAction;
