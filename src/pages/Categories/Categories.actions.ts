import * as types from "./Categories.types";

export const getCategories = (): types.GetCategoriesAction => ({
  type: types.GET_CATEGORIES,
});

export const getCategoriesRequest = (): types.GetCategoriesRequestAction => ({
  type: types.GET_CATEGORIES_REQUEST,
});

export const getCategoriesSuccess = (
  payload: ShortCategory[]
): types.GetCategoriesSuccessAction => ({
  type: types.GET_CATEGORIES_SUCCESS,
  payload,
});

export const getCategoriesFailure = (
  error: BaseError
): types.GetCategoriesFailureAction => ({
  type: types.GET_CATEGORIES_FAILURE,
  error,
});
