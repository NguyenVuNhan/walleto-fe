import { connect } from "react-redux";
import { Dispatch } from "redux";
// import { login } from "./Login.actions";
import LoginComponent from "./Login.component";
// import { LoginActionType } from "./Login.types";

interface LoginActionType {
  type: any;
}

const mapDispatchToProps = (dispatch: Dispatch<LoginActionType>) => ({
  // onLogin: (data: LoginForm) => {
  //   dispatch(login(data));
  // },
});

export default connect(null, mapDispatchToProps)(LoginComponent);
