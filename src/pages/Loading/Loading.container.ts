import { connect } from "react-redux";
import { RootState } from "src/reducer/rootReducer";
import Loading from "./Loading.component";

interface Props {
  auto?: boolean;
}

const mapStateToProps = ({ loading }: RootState, props: Props) => {
  const isLoading =
    Object.keys(loading).length > 0 &&
    Object.values(loading).every((k) => k === true);
  return { ...props, isLoading };
};

export default connect(mapStateToProps)(Loading);
