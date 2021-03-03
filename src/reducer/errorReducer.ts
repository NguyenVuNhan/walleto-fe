import { loginTypes } from "src/pages/Login";

export type ErrorAction = loginTypes.LoginFailureAction;

export interface ErrorState {
  [loginTypes.LOGIN]?: loginTypes.LoginFailureAction["error"];
}

const getErrorMatches = (actionType: string) =>
  /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(actionType);

const errorReducer = (
  state: ErrorState = {},
  action: ErrorAction
): ErrorState => {
  const matches = getErrorMatches(action.type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestStatus] = matches;
  return {
    ...state,
    [requestName]: requestStatus === "FAILURE" ? action.error : null,
  };
};

export default errorReducer;
