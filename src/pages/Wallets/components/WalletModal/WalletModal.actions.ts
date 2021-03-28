import * as types from "./WalletModal.types";

// Add wallet
export const addWallet = (
  payload: WalletForm,
  callback?: () => void
): types.AddWalletAction => ({
  type: types.ADD_WALLET,
  payload,
  callback,
});

export const addWalletRequest = (): types.AddWalletRequestAction => ({
  type: types.ADD_WALLET_REQUEST,
});

export const addWalletSuccess = (
  payload: Wallet
): types.AddWalletSuccessAction => ({
  type: types.ADD_WALLET_SUCCESS,
  payload,
});

export const addWalletFailure = (
  error?: BaseError
): types.AddWalletFailureAction => ({
  type: types.ADD_WALLET_FAILURE,
  error,
});

// Update wallet
export const updateWallet = (
  id: number,
  data: Partial<WalletForm>,
  callback?: ActionCallback
): types.UpdateWalletAction => ({
  type: types.UPDATE_WALLET,
  payload: { id, data },
  callback,
});

export const updateWalletRequest = (): types.UpdateWalletRequestAction => ({
  type: types.UPDATE_WALLET_REQUEST,
});

export const updateWalletSuccess = (
  payload: Wallet
): types.UpdateWalletSuccessAction => ({
  type: types.UPDATE_WALLET_SUCCESS,
  payload,
});

export const updateWalletFailure = (
  error?: BaseError
): types.UpdateWalletFailureAction => ({
  type: types.UPDATE_WALLET_FAILURE,
  error,
});
