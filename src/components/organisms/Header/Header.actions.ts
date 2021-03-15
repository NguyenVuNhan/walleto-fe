import * as types from "./Header.types";

export const logout = (): types.LogoutAction => ({
  type: types.LOGOUT,
  payload: null,
});

export const logoutRequest = (): types.LogoutRequestAction => ({
  type: types.LOGOUT_REQUEST,
});

export const logoutSuccess = (): types.LogoutSuccessAction => ({
  type: types.LOGOUT_SUCCESS,
  payload: null,
});

export const logoutFailure = (error: BaseError): types.LogoutFailureAction => ({
  type: types.LOGOUT_FAILURE,
  error,
});
