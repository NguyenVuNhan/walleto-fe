export const ADD_CATEGORY = "category/addCategory/ADD_CATEGORY";
export interface AddCategoryAction {
  type: typeof ADD_CATEGORY;
  payload: CategoryForm;
}

export const ADD_CATEGORY_REQUEST = "category/addCategory/ADD_CATEGORY_REQUEST";
export type AddCategoryRequestAction = BaseRequestAction<
  typeof ADD_CATEGORY_REQUEST
>;

export const ADD_CATEGORY_SUCCESS = "category/addCategory/ADD_CATEGORY_SUCCESS";
export type AddCategorySuccessAction = BaseSuccessAction<
  typeof ADD_CATEGORY_SUCCESS,
  Category
>;

export const ADD_CATEGORY_FAILURE = "category/addCategory/ADD_CATEGORY_FAILURE";
export type AddCategoryFailureAction = BaseFailureAction<
  typeof ADD_CATEGORY_FAILURE
>;

export type AddCategoryActionType =
  | AddCategoryAction
  | AddCategoryRequestAction
  | AddCategorySuccessAction
  | AddCategoryFailureAction;
