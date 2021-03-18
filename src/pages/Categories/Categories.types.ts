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
