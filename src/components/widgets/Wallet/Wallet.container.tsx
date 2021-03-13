import { connect, MapStateToProps } from "react-redux";
import WalletWidget from "./Wallet.component";

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

interface OwnProps {
  className?: string;
}

interface StateProps {
  generalData: TransactionOverView[];
  detailsData: TransactionOverView[];
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (_, props) => {
  return { ...props, generalData, detailsData };
};

export type Props = OwnProps & StateProps;
export default connect(mapStateToProps)(WalletWidget);
