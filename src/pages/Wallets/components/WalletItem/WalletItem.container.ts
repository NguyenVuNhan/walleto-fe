import { MouseEventHandler } from "react";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { deleteWallet, getWallet } from "./WalletItem.actions";
import WalletItemComponent from "./WalletItem.component";
import { GET_WALLET } from "./WalletItem.types";

interface OwnProps {
  id: number;
  className?: string;
  onClose?: MouseEventHandler;
}

interface StateProps {
  wallet: Wallet | null;
  loading: boolean;
}

interface DispatchProps {
  onGetWallet(currentWalletId?: number): void;
  onDeleteWallet(): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = ({
  wallet,
  loading,
}) => {
  const isFetchingWallet = loading[GET_WALLET];

  return { wallet, loading: isFetchingWallet };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch,
  { id }
) => ({
  onGetWallet: (currentWalletId) => {
    if (id !== currentWalletId) dispatch(getWallet(id));
  },
  onDeleteWallet: () => {
    dispatch(deleteWallet(id));
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletItemComponent);
