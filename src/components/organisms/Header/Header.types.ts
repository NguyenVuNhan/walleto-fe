export const LOGOUT = "auth/logout/LOGOUT";
export interface LogoutAction {
  type: typeof LOGOUT;
  payload: null;
}

export const LOGOUT_REQUEST = "auth/logout/LOGOUT_REQUEST";
export type LogoutRequestAction = BaseRequestAction<typeof LOGOUT_REQUEST>;

export const LOGOUT_SUCCESS = "auth/logout/LOGOUT_SUCCESS";
export type LogoutSuccessAction = BaseSuccessAction<
  typeof LOGOUT_SUCCESS,
  null
>;

export const LOGOUT_FAILURE = "auth/logout/LOGOUT_FAILURE";
export type LogoutFailureAction = BaseFailureAction<typeof LOGOUT_FAILURE>;

export type LogoutActionType =
  | LogoutAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction;
