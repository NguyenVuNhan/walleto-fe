import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { LOGIN, LoginFailureAction } from "./Login.types";
import { login } from "./Login.actions";
import LoginComponent from "./Login.component";

interface OwnProps {}

interface StateProps {
  error?: LoginFailureAction["error"];
}

interface DispatchProps {
  onLogin(data: LoginForm): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = ({ error }) => {
  return { error: error[LOGIN] };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch
) => ({
  onLogin: (data: LoginForm) => {
    dispatch(login(data));
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
