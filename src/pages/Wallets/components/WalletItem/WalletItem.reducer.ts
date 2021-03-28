import * as types from "./WalletItem.types";

export type WalletState = Wallet | null;

type WalletActionType =
  | types.GetWalletActionType
  | types.DeleteWalletActionType;

const initialState: WalletState = null;

const walletsReducer = (
  state = initialState,
  action: WalletActionType
): WalletState => {
  switch (action.type) {
    case types.GET_WALLET_SUCCESS:
      return { ...action.payload };
    case types.DELETE_WALLET_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default walletsReducer;
