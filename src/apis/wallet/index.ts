import axios from "axios";

export type GetWalletsRes = BaseBody<{ wallets: ShortWallet[] }>;
export const getWallets = async (): Promise<GetWalletsRes> => {
  const res = await axios.get<GetWalletsRes>("/api/wallet");
  return res.data;
};

export type GetWalletRes = BaseBody<Wallet>;
export const getWallet = async (id: number): Promise<GetWalletRes> => {
  const res = await axios.get<GetWalletRes>(`/api/wallet/${id}`);
  return res.data;
};

export type AddWalletRes = BaseBody<Wallet>;
export const addWallet = async (data: WalletForm): Promise<AddWalletRes> => {
  const res = await axios.post<AddWalletRes>("/api/wallet", data);
  return res.data;
};

export type UpdateWalletRes = BaseBody<Wallet>;
export const updateWallet = async (
  id: number,
  data: Partial<WalletForm>
): Promise<UpdateWalletRes> => {
  const res = await axios.post<UpdateWalletRes>(`/api/wallet/${id}`, data);
  return res.data;
};

export type DeleteWalletRes = BaseBody<Wallet>;
export const deleteWallet = async (id: number): Promise<DeleteWalletRes> => {
  const res = await axios.delete<DeleteWalletRes>(`/api/wallet/${id}`);
  return res.data;
};
