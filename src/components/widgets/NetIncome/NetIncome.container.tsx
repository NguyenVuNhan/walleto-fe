import { connect } from "react-redux";
import { RootState } from "src/reducer/rootReducer";
import NetIncomeWidget, { Props } from "./NetIncome.component";

const data: NetIncomeData[] = [
  { name: "Page A", income: 4000, expense: -2400 },
  { name: "Page B", income: 3000, expense: -1398 },
  { name: "Page C", income: 2000, expense: -1000 },
  { name: "Page D", income: 2780, expense: -3908 },
  { name: "Page E", income: 1890, expense: -4800 },
  { name: "Page F", income: 2390, expense: -3800 },
  { name: "Page G", income: 3490, expense: -4300 },
];

type InnerProps = Omit<Props, "data">;

const mapStateToProps = ({}: RootState, props: InnerProps) => {
  return { ...props, data };
};

export default connect(mapStateToProps)(NetIncomeWidget);
