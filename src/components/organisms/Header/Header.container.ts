import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { LOGOUT, LogoutFailureAction } from "./Header.types";
import { logout } from "./Header.actions";
import LogoutComponent from "./Header.component";
import { MouseEventHandler, ReactNode } from "react";

interface OwnProps {
  onMenuClick?: MouseEventHandler;
  children?: ReactNode;
}

interface StateProps {
  error?: LogoutFailureAction["error"];
}

interface DispatchProps {
  onLogout(): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = ({ errors }) => {
  const error: LogoutFailureAction["error"] | null = errors[LOGOUT];
  if (error) return { error };
  else return {};
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch
) => ({
  onLogout: () => {
    dispatch(logout());
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);
