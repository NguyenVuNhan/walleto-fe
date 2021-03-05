import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "src/reducer/rootReducer";
import { register } from "./Register.actions";
import RegisterComponent from "./Register.component";
import { REGISTER, RegisterActionType } from "./Register.types";

const mapStateToProps = ({ error }: RootState) => {
  return { error: error[REGISTER] };
};

const mapDispatchToProps = (dispatch: Dispatch<RegisterActionType>) => ({
  onRegister: (data: RegisterForm) => {
    dispatch(register(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
