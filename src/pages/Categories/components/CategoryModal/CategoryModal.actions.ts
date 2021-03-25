import * as types from "./CategoryModal.types";

export const addCategory = (
  payload: CategoryForm
): types.AddCategoryAction => ({
  type: types.ADD_CATEGORY,
  payload,
});

export const addCategoryRequest = (): types.AddCategoryRequestAction => ({
  type: types.ADD_CATEGORY_REQUEST,
});

export const addCategorySuccess = (
  payload: Category
): types.AddCategorySuccessAction => ({
  type: types.ADD_CATEGORY_SUCCESS,
  payload,
});

export const addCategoryFailure = (
  error: BaseError
): types.AddCategoryFailureAction => ({
  type: types.ADD_CATEGORY_FAILURE,
  error,
});