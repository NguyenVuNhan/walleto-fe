import { loginTypes } from "src/pages/Login";
import { registerTypes } from "src/pages/Register";

type LoadingAction =
  | loginTypes.LoginRequestAction
  | registerTypes.RegisterRequestAction;

export interface LoadingState {
  [loginTypes.LOGIN]?: boolean;
  [registerTypes.REGISTER]?: boolean;
}

const getErrorMatches = (actionType: string) =>
  /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(actionType);

const loadingReducer = (
  state: LoadingState = {},
  action: LoadingAction
): LoadingState => {
  const matches = getErrorMatches(action.type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestStatus] = matches;
  return {
    ...state,
    [requestName]: requestStatus === "REQUEST" ? true : false,
  };
};

export default loadingReducer;
