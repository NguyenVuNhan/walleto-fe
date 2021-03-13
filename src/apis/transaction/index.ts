import axios from "axios";

export type GetTransactionsRes = BaseBody<{
  transactions: ShortTransaction[];
}>;
export const getTransactions = async (
  from?: string,
  to?: string
): Promise<GetTransactionsRes> => {
  const query = (from ? `?from=${from}` : "") + (to ? `&to=${to}` : "");
  const res = await axios.get(`/api/transaction${query}`);
  return res.data;
};
