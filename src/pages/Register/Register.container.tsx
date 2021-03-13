import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { register } from "./Register.actions";
import RegisterComponent from "./Register.component";
import { REGISTER, RegisterFailureAction } from "./Register.types";

interface OwnProps {}

interface StateProps {
  error?: RegisterFailureAction["error"];
}

interface DispatchProps {
  onRegister(data: RegisterForm): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = ({ error }) => {
  return { error: error[REGISTER] };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch
) => ({
  onRegister: (data: RegisterForm) => {
    dispatch(register(data));
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
