import { MouseEventHandler } from "react";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { deleteTransaction, getTransaction } from "./TransactionItem.actions";
import TransactionItemComponent from "./TransactionItem.component";

interface OwnProps {
  id: number;
  className?: string;
  onClose?: MouseEventHandler;
}

interface StateProps {
  transaction: Transaction | null;
}

interface DispatchProps {
  onGetTransaction(id: number, currentTransactionId?: number): void;
  onDeleteTransaction(id: number): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (
  { transaction },
  props
) => {
  return { transaction, ...props };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch
) => ({
  onGetTransaction: (id, currentTransactionId) => {
    if (id === currentTransactionId) return;
    dispatch(getTransaction(id));
  },
  onDeleteTransaction: (id) => {
    dispatch(deleteTransaction(id));
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionItemComponent);
