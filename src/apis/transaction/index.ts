import axios from "axios";

export type GetTransactionsRes = BaseBody<{
  transactions: ShortTransaction[];
}>;
export const getTransactions = async (
  from?: string,
  to?: string
): Promise<GetTransactionsRes> => {
  const query = (from ? `?from=${from}` : "") + (to ? `&to=${to}` : "");
  const res = await axios.get<GetTransactionsRes>(`/api/transaction${query}`);
  return res.data;
};

export type GetTransactionRes = BaseBody<Transaction>;
export const getTransaction = async (
  id: number
): Promise<GetTransactionRes> => {
  const res = await axios.get<GetTransactionRes>(`/api/transaction/${id}`);
  return res.data;
};
