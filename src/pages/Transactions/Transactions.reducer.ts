import * as types from "./Transactions.types";

interface TransactionData {
  [key: string]: { total: number; transactions: ShortTransaction[] };
}

export interface TransactionsState {
  inflow: number;
  outflow: number;
  total: number;
  transactions: TransactionData;
}

const initialState: TransactionsState = {
  inflow: 0,
  outflow: 0,
  total: 0,
  transactions: {},
};

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
      let inflow = 0;
      let outflow = 0;
      const transactions: TransactionData = {};

      payload.forEach((transaction) => {
        if (transaction.amount > 0) inflow += transaction.amount;
        else outflow += -1 * transaction.amount;
        const date = transaction.date.split("T")[0];
        if (transactions[date] === undefined) {
          transactions[date] = {
            transactions: [transaction],
            total: transaction.amount,
          };
        } else {
          transactions[date].transactions.push(transaction);
          transactions[date].total += transaction.amount;
        }
      });

      const total = inflow - outflow;

      return { inflow, outflow, total, transactions };
    default:
      return state;
  }
};

export default transactionsReducer;
