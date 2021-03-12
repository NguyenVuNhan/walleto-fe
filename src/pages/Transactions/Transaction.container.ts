import { connect } from "react-redux";
import { RootState } from "src/reducer/rootReducer";
import TransactionComponent from "./Transactions.component";

const mapStateToProps = ({ transactions }: RootState) => {
  return { transactionData: transactions };
};

export default connect(mapStateToProps)(TransactionComponent);
