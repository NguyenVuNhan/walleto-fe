import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import {
  DeleteWalletFailureAction,
  DELETE_WALLET,
} from "./components/WalletItem/WalletItem.types";
import { getWallets, getWalletsFailure } from "./Wallets.actions";
import WalletsComponent from "./Wallets.component";

interface OwnProps {}

interface StateProps {
  error?: DeleteWalletFailureAction["error"];
  wallets: ShortWallet[];
}

interface DispatchProps {
  onGetWallets(): void;
  clearError(error?: StateProps["error"]): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = ({
  errors,
  wallets,
}) => {
  const error: DeleteWalletFailureAction["error"] | undefined =
    errors[DELETE_WALLET];
  return { wallets: wallets.wallets, error };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch
) => ({
  onGetWallets: () => {
    dispatch(getWallets());
  },
  clearError: (error) => {
    error && dispatch(getWalletsFailure());
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(WalletsComponent);
