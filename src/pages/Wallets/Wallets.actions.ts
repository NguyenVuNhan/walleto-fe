import * as types from "./Wallets.types";

// Get wallet
export const getWallets = (): types.GetWalletsAction => ({
  type: types.GET_WALLETS,
});

export const getWalletsRequest = (): types.GetWalletsRequestAction => ({
  type: types.GET_WALLETS_REQUEST,
});

export const getWalletsSuccess = (
  payload: ShortWallet[]
): types.GetWalletsSuccessAction => ({
  type: types.GET_WALLETS_SUCCESS,
  payload,
});

export const getWalletsFailure = (
  error?: BaseError
): types.GetWalletsFailureAction => ({
  type: types.GET_WALLETS_FAILURE,
  error,
});
