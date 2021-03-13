import { connect, MapStateToProps } from "react-redux";
import TransactionComponent from "./Transactions.component";
import { TransactionsState } from "./Transactions.reducer";

interface OwnProps {}

interface StateProps {
  transactionData: TransactionsState;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = ({
  transactions,
}) => {
  return { transactionData: transactions };
};

export default connect(mapStateToProps)(TransactionComponent);
