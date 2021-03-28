import * as types from "./WalletItem.types";

// get actions
export const getWallet = (id: number): types.GetWalletAction => ({
  type: types.GET_WALLET,
  payload: { id },
});

export const getWalletRequest = (): types.GetWalletRequestAction => ({
  type: types.GET_WALLET_REQUEST,
});

export const getWalletSuccess = (
  payload: Wallet
): types.GetWalletSuccessAction => ({
  type: types.GET_WALLET_SUCCESS,
  payload,
});

export const getWalletFailure = (
  error: BaseError
): types.GetWalletFailureAction => ({
  type: types.GET_WALLET_FAILURE,
  error,
});

//Delete actions
export const deleteWallet = (id: number): types.DeleteWalletAction => ({
  type: types.DELETE_WALLET,
  payload: { id },
});

export const deleteWalletRequest = (): types.DeleteWalletRequestAction => ({
  type: types.DELETE_WALLET_REQUEST,
});

export const deleteWalletSuccess = (
  payload: Wallet
): types.DeleteWalletSuccessAction => ({
  type: types.DELETE_WALLET_SUCCESS,
  payload,
});

export const deleteWalletFailure = (
  error: BaseError
): types.DeleteWalletFailureAction => ({
  type: types.DELETE_WALLET_FAILURE,
  error,
});
