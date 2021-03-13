import { loginTypes } from "src/pages/Login";

type AuthActionType = loginTypes.LoginActionType;

export interface AuthState {
  user?: User;
  authenticated: boolean;
}

const initialState: AuthState = {
  authenticated: false,
};

const authReducer = (
  state = initialState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case loginTypes.LOGIN_REQUEST:
    case loginTypes.LOGIN_FAILURE:
      return { authenticated: false };
    case loginTypes.LOGIN_SUCCESS:
      return { ...state, authenticated: true, user: action.payload };
    default:
      return state;
  }
};

export default authReducer;
