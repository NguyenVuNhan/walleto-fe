import * as types from "./TransactionItem.types";

export type TransactionState = Transaction | null;

type TransactionActionType = types.GetTransactionActionType;

const initialState: TransactionState = null;

const transactionsReducer = (
  state = initialState,
  action: TransactionActionType
): TransactionState => {
  switch (action.type) {
    case types.GET_TRANSACTION_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default transactionsReducer;
