import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { categoriesActions, categoriesTypes } from "src/pages/Categories";
import { walletsTypes, walletsActions } from "src/pages/Wallets";
import { addTransaction, updateTransaction } from "./TransactionModal.actions";
import TransactionModalComponent from "./TransactionModal.component";
import {
  AddTransactionFailureAction,
  ADD_TRANSACTION,
  UpdateTransactionFailureAction,
  UPDATE_TRANSACTION,
} from "./TransactionModal.types";

type modalType = "add" | "update";

interface OwnProps {
  open: boolean;
  type?: modalType;
  onClose?: () => void;
  transaction?: Transaction;
}

interface StateProps {
  wallets?: ShortWallet[];
  incomeCategories?: ShortCategory[];
  expenseCategories?: ShortCategory[];
  error?:
    | AddTransactionFailureAction["error"]
    | UpdateTransactionFailureAction["error"];
  loading: boolean;
}

interface DispatchProps {
  fetchData: () => void;
  onSubmit: (cb?: ActionCallback) => (data: TransactionForm) => void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (
  { wallets: { wallets }, categories, errors, loading },
  { type }
) => {
  const isLoading =
    loading[walletsTypes.GET_WALLETS] ||
    loading[categoriesTypes.GET_CATEGORIES];

  const error: StateProps["error"] =
    errors[type === "update" ? UPDATE_TRANSACTION : ADD_TRANSACTION];

  return {
    wallets,
    incomeCategories: categories.income,
    expenseCategories: categories.expense,
    error,
    loading: isLoading,
  };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch,
  { type, transaction }
) => ({
  fetchData: () => {
    dispatch(walletsActions.getWallets());
    dispatch(categoriesActions.getCategories());
  },
  onSubmit: (cb) => (data) => {
    if (data)
      if (type === "update") {
        dispatch(updateTransaction(transaction?.id as number, data, cb));
        return;
      }
    dispatch(addTransaction(data, cb));
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionModalComponent);
