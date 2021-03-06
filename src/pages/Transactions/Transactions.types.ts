export const GET_TRANSACTIONS = "transactions/getTransactions/GET_TRANSACTIONS";
export interface GetTransactionsAction {
  type: typeof GET_TRANSACTIONS;
  payload: { from?: string; to?: string };
}

export const GET_TRANSACTIONS_REQUEST =
  "transactions/getTransactions/GET_TRANSACTIONS_REQUEST";
export type GetTransactionsRequestAction = BaseRequestAction<
  typeof GET_TRANSACTIONS_REQUEST
>;

export const GET_TRANSACTIONS_SUCCESS =
  "transactions/getTransactions/GET_TRANSACTIONS_SUCCESS";
export type GetTransactionsSuccessAction = BaseSuccessAction<
  typeof GET_TRANSACTIONS_SUCCESS,
  ShortTransaction[]
>;

export const GET_TRANSACTIONS_FAILURE =
  "transactions/getTransactions/GET_TRANSACTIONS_FAILURE";
export type GetTransactionsFailureAction = BaseFailureAction<
  typeof GET_TRANSACTIONS_FAILURE
>;

export type GetTransactionsActionType =
  | GetTransactionsAction
  | GetTransactionsRequestAction
  | GetTransactionsSuccessAction
  | GetTransactionsFailureAction;
