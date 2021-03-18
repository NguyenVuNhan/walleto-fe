import * as types from "./Transactions.types";

export interface TransactionsState {
  [key: string]: { total: number; transactions: ShortTransaction[] };
}

const initialState: TransactionsState = {};

const transactionsReducer = (
  state = initialState,
  action: types.GetTransactionsActionType
): TransactionsState => {
  switch (action.type) {
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

export default transactionsReducer;
