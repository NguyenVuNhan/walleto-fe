import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { addCategory, updateCategory } from "./CategoryModal.actions";
import CategoryModalComponent from "./CategoryModal.component";
import {
  AddCategoryFailureAction,
  ADD_CATEGORY,
  UpdateCategoryFailureAction,
  UPDATE_CATEGORY,
} from "./CategoryModal.types";

type modalType = "add" | "update";

export interface CategoryProp {
  id: number;
  type: "Income" | "Expense";
  name: string;
  parent?: number;
}

interface OwnProps {
  open: boolean;
  type?: modalType;
  onClose?: () => void;
  category?: CategoryProp;
}

interface StateProps {
  error?:
    | AddCategoryFailureAction["error"]
    | UpdateCategoryFailureAction["error"];
  income: { id: number; name: string }[];
  expense: { id: number; name: string }[];
}

interface DispatchProps {
  onSubmit(cb?: ActionCallback): (data: CategoryForm) => void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (
  { errors, categories },
  { type }
) => {
  const error: StateProps["error"] =
    errors[type === "update" ? UPDATE_CATEGORY : ADD_CATEGORY];
  const income = categories.income.map((v) => ({ id: v.id, name: v.name }));
  const expense = categories.expense.map((v) => ({ id: v.id, name: v.name }));
  return { income, expense, error: error || undefined };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch,
  { type, category }
) => ({
  onSubmit: (cb) => (data) => {
    if (type === "update") {
      if (data.name === category?.name)
        delete (data as Partial<CategoryForm>).name;
      dispatch(updateCategory(category?.id as number, data, cb));
      return;
    }
    dispatch(addCategory(data, cb));
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryModalComponent);
