// Add category
export const ADD_CATEGORY = "category/addCategory/ADD_CATEGORY";
export interface AddCategoryAction {
  type: typeof ADD_CATEGORY;
  payload: CategoryForm;
  callback?: ActionCallback;
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

// Update category
export const UPDATE_CATEGORY = "category/updateCategory/UPDATE_CATEGORY";
export interface UpdateCategoryAction {
  type: typeof UPDATE_CATEGORY;
  payload: { id: number; data: Partial<CategoryForm> };
  callback?: ActionCallback;
}

export const UPDATE_CATEGORY_REQUEST =
  "category/updateCategory/UPDATE_CATEGORY_REQUEST";
export type UpdateCategoryRequestAction = BaseRequestAction<
  typeof UPDATE_CATEGORY_REQUEST
>;

export const UPDATE_CATEGORY_SUCCESS =
  "category/updateCategory/UPDATE_CATEGORY_SUCCESS";
export type UpdateCategorySuccessAction = BaseSuccessAction<
  typeof UPDATE_CATEGORY_SUCCESS,
  Category
>;

export const UPDATE_CATEGORY_FAILURE =
  "category/updateCategory/UPDATE_CATEGORY_FAILURE";
export type UpdateCategoryFailureAction = BaseFailureAction<
  typeof UPDATE_CATEGORY_FAILURE
>;

export type UpdateCategoryActionType =
  | UpdateCategoryAction
  | UpdateCategoryRequestAction
  | UpdateCategorySuccessAction
  | UpdateCategoryFailureAction;
