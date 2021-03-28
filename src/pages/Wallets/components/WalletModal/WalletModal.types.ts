// Add wallet
export const ADD_WALLET = "wallet/addWallet/ADD_WALLET";
export interface AddWalletAction {
  type: typeof ADD_WALLET;
  payload: WalletForm;
  callback?: ActionCallback;
}

export const ADD_WALLET_REQUEST = "wallet/addWallet/ADD_WALLET_REQUEST";
export type AddWalletRequestAction = BaseRequestAction<
  typeof ADD_WALLET_REQUEST
>;

export const ADD_WALLET_SUCCESS = "wallet/addWallet/ADD_WALLET_SUCCESS";
export type AddWalletSuccessAction = BaseSuccessAction<
  typeof ADD_WALLET_SUCCESS,
  Wallet
>;

export const ADD_WALLET_FAILURE = "wallet/addWallet/ADD_WALLET_FAILURE";
export type AddWalletFailureAction = BaseFailureAction<
  typeof ADD_WALLET_FAILURE
>;

export type AddWalletActionType =
  | AddWalletAction
  | AddWalletRequestAction
  | AddWalletSuccessAction
  | AddWalletFailureAction;

// Update wallet
export const UPDATE_WALLET = "wallet/updateWallet/UPDATE_WALLET";
export interface UpdateWalletAction {
  type: typeof UPDATE_WALLET;
  payload: { id: number; data: Partial<WalletForm> };
  callback?: ActionCallback;
}

export const UPDATE_WALLET_REQUEST =
  "wallet/updateWallet/UPDATE_WALLET_REQUEST";
export type UpdateWalletRequestAction = BaseRequestAction<
  typeof UPDATE_WALLET_REQUEST
>;

export const UPDATE_WALLET_SUCCESS =
  "wallet/updateWallet/UPDATE_WALLET_SUCCESS";
export type UpdateWalletSuccessAction = BaseSuccessAction<
  typeof UPDATE_WALLET_SUCCESS,
  Wallet
>;

export const UPDATE_WALLET_FAILURE =
  "wallet/updateWallet/UPDATE_WALLET_FAILURE";
export type UpdateWalletFailureAction = BaseFailureAction<
  typeof UPDATE_WALLET_FAILURE
>;

export type UpdateWalletActionType =
  | UpdateWalletAction
  | UpdateWalletRequestAction
  | UpdateWalletSuccessAction
  | UpdateWalletFailureAction;
