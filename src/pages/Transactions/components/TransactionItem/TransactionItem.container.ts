import { MouseEventHandler } from "react";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { deleteTransaction, getTransaction } from "./TransactionItem.actions";
import TransactionItemComponent from "./TransactionItem.component";
import { GET_TRANSACTION } from "./TransactionItem.types";

interface OwnProps {
  id: number;
  className?: string;
  onClose?: MouseEventHandler;
}

interface StateProps {
  transaction: Transaction | null;
  loading: boolean;
}

interface DispatchProps {
  onGetTransaction(currentTransactionId?: number): void;
  onDeleteTransaction(): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (
  { transaction, loading },
  { id }
) => {
  const isTransactionLoading =
    loading[GET_TRANSACTION] || id !== (transaction as Transaction)?.id;
  return { transaction, loading: isTransactionLoading };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch,
  { id }
) => ({
  onGetTransaction: (currentTransactionId) => {
    if (id !== currentTransactionId) dispatch(getTransaction(id));
  },
  onDeleteTransaction: () => {
    dispatch(deleteTransaction(id));
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionItemComponent);
