import { connect, MapStateToProps } from "react-redux";
import Loading from "./Loading.component";

interface OwnProps {
  auto?: boolean;
}

interface StateProps {
  isLoading: boolean;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (
  { loading },
  props
) => {
  const isLoading =
    Object.keys(loading).length > 0 &&
    Object.values(loading).every((k) => k === true);
  return { ...props, isLoading };
};

export type Props = StateProps & OwnProps;

export default connect(mapStateToProps)(Loading);
