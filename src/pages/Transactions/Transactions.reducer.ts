import * as types from "./Transactions.types";

export interface TransactionsState {
  [key: string]: { total: number; transactions: ShortTransaction[] };
}

type AuthActionType = types.GetTransactionsActionType;

const initialState: TransactionsState = {};

const authReducer = (
  state = initialState,
  action: AuthActionType
): TransactionsState => {
  switch (action.type) {
    case types.GET_TRANSACTIONS_REQUEST:
    case types.GET_TRANSACTIONS_FAILURE:
      return { ...state };
    case types.GET_TRANSACTIONS_SUCCESS:
      // Sort the transaction by date
      const payload = action.payload.sort((b, a) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      // Categorize transactions by date
      const transactionData: TransactionsState = {};
      payload.forEach((transaction) => {
        const date = transaction.date.split("T")[0];
        if (transactionData[date] === undefined) {
          transactionData[date] = {
            transactions: [transaction],
            total: transaction.amount,
          };
        } else {
          transactionData[date].transactions.push(transaction);
          transactionData[date].total += transaction.amount;
        }
      });

      return { ...transactionData };
    default:
      return state;
  }
};

export default authReducer;
