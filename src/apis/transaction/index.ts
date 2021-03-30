import axios from "axios";

const baseUrl = "/api/transaction";

export type GetTransactionsRes = BaseBody<{
  transactions: ShortTransaction[];
}>;
export const getTransactions = async (
  from?: string,
  to?: string
): Promise<GetTransactionsRes> => {
  const query = (from ? `?from=${from}` : "") + (to ? `&to=${to}` : "");
  const res = await axios.get<GetTransactionsRes>(`${baseUrl}${query}`);
  return res.data;
};

export type GetTransactionRes = BaseBody<Transaction>;
export const getTransaction = async (
  id: number
): Promise<GetTransactionRes> => {
  const res = await axios.get<GetTransactionRes>(`${baseUrl}/${id}`);
  return res.data;
};

export type AddTransactionRes = BaseBody<Transaction>;
export const addTransaction = async (
  data: TransactionForm
): Promise<AddTransactionRes> => {
  const res = await axios.post<AddTransactionRes>(baseUrl, data);
  return res.data;
};

export type UpdateTransactionRes = BaseBody<Transaction>;
export const updateTransaction = async (
  id: number,
  data: Partial<TransactionForm>
): Promise<UpdateTransactionRes> => {
  const res = await axios.post<UpdateTransactionRes>(`${baseUrl}/${id}`, data);
  return res.data;
};

export type DeleteTransactionRes = BaseBody<Transaction>;
export const deleteTransaction = async (
  id: number
): Promise<DeleteTransactionRes> => {
  const res = await axios.delete<DeleteTransactionRes>(`${baseUrl}/${id}`);
  return res.data;
};
