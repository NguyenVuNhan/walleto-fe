export type ErrorAction = BaseFailureAction;

export interface ErrorState {
  [key: string]: BaseFailureAction["error"] | null;
}

const getErrorMatches = (actionType: string) =>
  /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(actionType);

const errorsReducer = (
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

export default errorsReducer;
