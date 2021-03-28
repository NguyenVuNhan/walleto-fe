// Get wallet
export const GET_WALLET = "wallet/getWallet/GET_WALLET";
export interface GetWalletAction {
  type: typeof GET_WALLET;
  payload: { id: number };
}

export const GET_WALLET_REQUEST = "wallet/getWallet/GET_WALLET_REQUEST";
export type GetWalletRequestAction = BaseRequestAction<
  typeof GET_WALLET_REQUEST
>;

export const GET_WALLET_SUCCESS = "wallet/getWallet/GET_WALLET_SUCCESS";
export type GetWalletSuccessAction = BaseSuccessAction<
  typeof GET_WALLET_SUCCESS,
  Wallet
>;

export const GET_WALLET_FAILURE = "wallet/getWallet/GET_WALLET_FAILURE";
export type GetWalletFailureAction = BaseFailureAction<
  typeof GET_WALLET_FAILURE
>;

export type GetWalletActionType =
  | GetWalletAction
  | GetWalletRequestAction
  | GetWalletSuccessAction
  | GetWalletFailureAction;

// Delete wallet
export const DELETE_WALLET = "wallet/deleteWallet/DELETE_WALLET";
export interface DeleteWalletAction {
  type: typeof DELETE_WALLET;
  payload: { id: number };
}

export const DELETE_WALLET_REQUEST =
  "wallet/deleteWallet/DELETE_WALLET_REQUEST";
export type DeleteWalletRequestAction = BaseRequestAction<
  typeof DELETE_WALLET_REQUEST
>;

export const DELETE_WALLET_SUCCESS =
  "wallet/deleteWallet/DELETE_WALLET_SUCCESS";
export type DeleteWalletSuccessAction = BaseSuccessAction<
  typeof DELETE_WALLET_SUCCESS,
  Wallet
>;

export const DELETE_WALLET_FAILURE =
  "wallet/deleteWallet/DELETE_WALLET_FAILURE";
export type DeleteWalletFailureAction = BaseFailureAction<
  typeof DELETE_WALLET_FAILURE
>;

export type DeleteWalletActionType =
  | DeleteWalletAction
  | DeleteWalletRequestAction
  | DeleteWalletSuccessAction
  | DeleteWalletFailureAction;
