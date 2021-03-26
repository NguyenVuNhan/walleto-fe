import * as types from "./Categories.types";

// Get categories
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
  error?: BaseError
): types.GetCategoriesFailureAction => ({
  type: types.GET_CATEGORIES_FAILURE,
  error,
});

// Delete category
export const deleteCategory = (
  payload: number
): types.DeleteCategoryAction => ({
  type: types.DELETE_CATEGORY,
  payload,
});

export const deleteCategoryRequest = (): types.DeleteCategoryRequestAction => ({
  type: types.DELETE_CATEGORY_REQUEST,
});

export const deleteCategorySuccess = (
  payload: Category
): types.DeleteCategorySuccessAction => ({
  type: types.DELETE_CATEGORY_SUCCESS,
  payload,
});

export const deleteCategoryFailure = (
  error?: BaseError
): types.DeleteCategoryFailureAction => ({
  type: types.DELETE_CATEGORY_FAILURE,
  error,
});
