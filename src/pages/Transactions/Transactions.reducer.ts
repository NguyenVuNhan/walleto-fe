import * as types from "./Transactions.types";

export interface TransactionsState {
  [key: string]: { total: number; transactions: ShortTransaction[] };
}

type AuthActionType = types.GetTransactionsActionType;

const initialState: TransactionsState = {
  "2021-02-27": {
    total: 40,
    transactions: [
      {
        id: 15,
        note: "Tax First quarter",
        amount: 20,
        date: "2021-02-27T20:13:05.000Z",
        category: "Tax",
      },
      {
        id: 16,
        note: "",
        amount: 20,
        date: "2021-02-27T20:13:10.933Z",
        category: "Housing",
      },
    ],
  },
  "2021-02-26": {
    total: 10,
    transactions: [
      {
        id: 17,
        note: "",
        amount: -20,
        date: "2021-02-26T20:13:05.933Z",
        category: "Food",
      },
      {
        id: 18,
        note: "",
        amount: 30,
        date: "2021-02-26T20:13:12.289Z",
        category: "Water",
      },
    ],
  },
};

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
        if (transactionData[date] !== undefined) {
          transactionData[date].transactions = [transaction];
          transactionData[date].total = transaction.amount;
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
