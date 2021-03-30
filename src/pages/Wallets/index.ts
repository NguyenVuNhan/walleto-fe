import Wallets from "./Wallets.container";
export { default as walletSaga } from "./Wallets.sagas";
export { default as walletsReducer } from "./Wallets.reducer";
export { default as WalletAction } from "./components/WalletAction";
export { walletReducer } from "./components/WalletItem";
// export { walletTypes } from "./components/WalletModal/";
export * as walletsTypes from "./Wallets.types";
export * as walletsActions from "./Wallets.actions";

export default Wallets;
