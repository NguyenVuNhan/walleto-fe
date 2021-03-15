import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { LOGOUT, LogoutFailureAction } from "./Header.types";
import { logout } from "./Header.actions";
import LogoutComponent from "./Header.component";
import { MouseEventHandler } from "react";

interface OwnProps {
  onMenuClick?: MouseEventHandler;
}

interface StateProps {
  error?: LogoutFailureAction["error"];
}

interface DispatchProps {
  onLogout(): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = ({ error }) => {
  return { error: error[LOGOUT] };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch
) => ({
  onLogout: () => {
    console.log("Logout");
    dispatch(logout());
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);
