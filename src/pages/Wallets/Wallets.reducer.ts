import * as types from "./Wallets.types";

export type WalletState = {
  wallets: ShortWallet[];
};

const initialState: WalletState = {
  wallets: [],
};

const walletReducer = (
  state = initialState,
  action: types.GetWalletActionType
): WalletState => {
  switch (action.type) {
    case types.GET_WALLETS_SUCCESS:
      return { ...state, wallets: action.payload };
    default:
      return state;
  }
};

export default walletReducer;
