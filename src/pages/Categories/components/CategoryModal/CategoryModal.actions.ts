import * as types from "./CategoryModal.types";

// Add category
export const addCategory = (
  payload: CategoryForm,
  callback?: () => void
): types.AddCategoryAction => ({
  type: types.ADD_CATEGORY,
  payload,
  callback,
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
  error?: BaseError
): types.AddCategoryFailureAction => ({
  type: types.ADD_CATEGORY_FAILURE,
  error,
});

// Update category
export const updateCategory = (
  id: number,
  data: Partial<CategoryForm>,
  callback?: ActionCallback
): types.UpdateCategoryAction => ({
  type: types.UPDATE_CATEGORY,
  payload: { id, data },
  callback,
});

export const updateCategoryRequest = (): types.UpdateCategoryRequestAction => ({
  type: types.UPDATE_CATEGORY_REQUEST,
});

export const updateCategorySuccess = (
  payload: Category
): types.UpdateCategorySuccessAction => ({
  type: types.UPDATE_CATEGORY_SUCCESS,
  payload,
});

export const updateCategoryFailure = (
  error?: BaseError
): types.UpdateCategoryFailureAction => ({
  type: types.UPDATE_CATEGORY_FAILURE,
  error,
});
