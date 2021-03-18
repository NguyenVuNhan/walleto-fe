import * as types from "./Categories.types";

export type CategoriesState = {
  [key in "income" | "expense"]: ShortCategory[];
};

const initialState: CategoriesState = {
  income: [],
  expense: [],
};

const categoriesReducer = (
  state = initialState,
  action: types.GetCategoriesActionType
): CategoriesState => {
  switch (action.type) {
    case types.GET_CATEGORIES_SUCCESS:
      const income: ShortCategory[] = [];
      const expense: ShortCategory[] = [];

      action.payload.forEach((category) => {
        if (category.type === "Income") {
          income.push(category);
        } else {
          expense.push(category);
        }
      });

      return { income, expense };
    default:
      return state;
  }
};

export default categoriesReducer;
