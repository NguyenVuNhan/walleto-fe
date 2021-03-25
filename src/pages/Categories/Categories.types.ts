// Get categories
export const GET_CATEGORIES = "categories/getCategories/GET_CATEGORIES";
export interface GetCategoriesAction {
  type: typeof GET_CATEGORIES;
}

export const GET_CATEGORIES_REQUEST =
  "categories/getCategories/GET_CATEGORIES_REQUEST";
export type GetCategoriesRequestAction = BaseRequestAction<
  typeof GET_CATEGORIES_REQUEST
>;

export const GET_CATEGORIES_SUCCESS =
  "categories/getCategories/GET_CATEGORIES_SUCCESS";
export type GetCategoriesSuccessAction = BaseSuccessAction<
  typeof GET_CATEGORIES_SUCCESS,
  ShortCategory[]
>;

export const GET_CATEGORIES_FAILURE =
  "categories/getCategories/GET_CATEGORIES_FAILURE";
export type GetCategoriesFailureAction = BaseFailureAction<
  typeof GET_CATEGORIES_FAILURE
>;

export type GetCategoriesActionType =
  | GetCategoriesAction
  | GetCategoriesRequestAction
  | GetCategoriesSuccessAction
  | GetCategoriesFailureAction;

// Delete category
export const DELETE_CATEGORY = "category/deleteCategory/DELETE_CATEGORY";
export interface DeleteCategoryAction {
  type: typeof DELETE_CATEGORY;
  payload: number;
}

export const DELETE_CATEGORY_REQUEST =
  "category/deleteCategory/DELETE_CATEGORY_REQUEST";
export type DeleteCategoryRequestAction = BaseRequestAction<
  typeof DELETE_CATEGORY_REQUEST
>;

export const DELETE_CATEGORY_SUCCESS =
  "category/deleteCategory/DELETE_CATEGORY_SUCCESS";
export type DeleteCategorySuccessAction = BaseSuccessAction<
  typeof DELETE_CATEGORY_SUCCESS,
  Category
>;

export const DELETE_CATEGORY_FAILURE =
  "category/deleteCategory/DELETE_CATEGORY_FAILURE";
export type DeleteCategoryFailureAction = BaseFailureAction<
  typeof DELETE_CATEGORY_FAILURE
>;

export type DeleteCategoryActionType =
  | DeleteCategoryAction
  | DeleteCategoryRequestAction
  | DeleteCategorySuccessAction
  | DeleteCategoryFailureAction;
