import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import {
  addWallet,
  addWalletFailure,
  updateWallet,
  updateWalletFailure,
} from "./WalletModal.actions";
import WalletModalComponent from "./WalletModal.component";
import {
  AddWalletFailureAction,
  ADD_WALLET,
  UpdateWalletFailureAction,
  UPDATE_WALLET,
} from "./WalletModal.types";

type modalType = "add" | "update";

interface OwnProps {
  open: boolean;
  type?: modalType;
  onClose?: () => void;
  wallet?: Wallet;
}

interface StateProps {
  error?: AddWalletFailureAction["error"] | UpdateWalletFailureAction["error"];
}

interface DispatchProps {
  onSubmit: (cb?: ActionCallback) => (data: WalletForm) => void;
  clearError(error?: StateProps["error"]): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (
  { errors },
  { type }
) => {
  const error: StateProps["error"] =
    errors[type === "update" ? UPDATE_WALLET : ADD_WALLET];
  return { error };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch,
  { type, wallet }
) => ({
  onSubmit: (cb) => (data) => {
    if (type === "update") {
      if (wallet?.name === data.name) delete (data as Partial<WalletForm>).name;

      dispatch(updateWallet(wallet?.id as number, data, cb));
      return;
    }
    dispatch(addWallet(data, cb));
  },
  clearError: (error) => {
    if (error) {
      dispatch(addWalletFailure());
      dispatch(updateWalletFailure());
    }
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletModalComponent);
