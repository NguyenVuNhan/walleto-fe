import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { getTransactions } from "./Transactions.actions";
import TransactionComponent from "./Transactions.component";
import { TransactionsState } from "./Transactions.reducer";

interface OwnProps {}

interface StateProps extends TransactionsState {}

interface DispatchProps {
  onGetTransactions(from?: string, to?: string): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = ({
  transactions,
}) => {
  return { ...transactions };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch
) => ({
  onGetTransactions: (...args) => {
    dispatch(getTransactions(...args));
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionComponent);
