import { memo } from "react";
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
    Object.values(loading).reduce((prev, curr) => prev || curr);
  return { ...props, isLoading };
};

export type Props = StateProps & OwnProps;

// Never re-render this component
export default memo<OwnProps>(connect(mapStateToProps)(Loading), () => true);
