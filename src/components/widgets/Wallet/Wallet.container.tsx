import { connect } from "react-redux";
import { RootState } from "src/reducer/rootReducer";
import WalletWidget, { Props } from "./Wallet.component";

const detailsData: TransactionOverView[] = [
  {
    name: "School",
    value: 500,
  },
  {
    name: "Utilities",
    value: 500,
  },
  {
    name: "Vacation",
    value: 500,
  },
  {
    name: "Bills",
    value: 500,
  },
  {
    name: "Food",
    value: 500,
  },
];

const generalData: TransactionOverView[] = [
  {
    name: "Income",
    value: 4500,
  },
  {
    name: "Expense",
    value: 3000,
  },
];

type InnerProps = Omit<Props, "detailsData" | "generalData">;

const mapStateToProps = ({}: RootState, props: InnerProps) => {
  return { ...props, generalData, detailsData };
};

export default connect(mapStateToProps)(WalletWidget);
