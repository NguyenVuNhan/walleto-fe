import * as types from "./TransactionItem.types";

export type TransactionState = Transaction | null;

type TransactionActionType =
  | types.GetTransactionActionType
  | types.DeleteTransactionActionType;

const initialState: TransactionState = null;

const transactionsReducer = (
  state = initialState,
  action: TransactionActionType
): TransactionState => {
  switch (action.type) {
    case types.GET_TRANSACTION_SUCCESS:
      return { ...action.payload };
    case types.DELETE_TRANSACTION_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default transactionsReducer;
