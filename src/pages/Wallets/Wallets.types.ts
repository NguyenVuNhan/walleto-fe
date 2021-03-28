// Get wallet
export const GET_WALLETS = "wallets/getWallets/GET_WALLETS";
export interface GetWalletsAction {
  type: typeof GET_WALLETS;
}

export const GET_WALLETS_REQUEST = "wallets/getWallets/GET_WALLETS_REQUEST";
export type GetWalletsRequestAction = BaseRequestAction<
  typeof GET_WALLETS_REQUEST
>;

export const GET_WALLETS_SUCCESS = "wallets/getWallets/GET_WALLETS_SUCCESS";
export type GetWalletsSuccessAction = BaseSuccessAction<
  typeof GET_WALLETS_SUCCESS,
  ShortWallet[]
>;

export const GET_WALLETS_FAILURE = "wallets/getWallets/GET_WALLETS_FAILURE";
export type GetWalletsFailureAction = BaseFailureAction<
  typeof GET_WALLETS_FAILURE
>;

export type GetWalletActionType =
  | GetWalletsAction
  | GetWalletsRequestAction
  | GetWalletsSuccessAction
  | GetWalletsFailureAction;
