import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "src/reducer/rootReducer";
import { login } from "./Login.actions";
import LoginComponent from "./Login.component";
import { LoginActionType } from "./Login.types";

const mapStateToProps = ({ error }: RootState) => {
  return { error: error["auth/login/LOGIN"] };
};

const mapDispatchToProps = (dispatch: Dispatch<LoginActionType>) => ({
  onLogin: (data: LoginForm) => {
    dispatch(login(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
