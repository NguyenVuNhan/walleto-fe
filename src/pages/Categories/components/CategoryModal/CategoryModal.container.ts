import { memo } from "react";
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
  error?: AddCategoryFailureAction["error"];
  income: { id: number; name: string }[];
  expense: { id: number; name: string }[];
}

interface DispatchProps {
  onUpdateCategory(
    id: number,
    data: Partial<CategoryForm>,
    cb?: ActionCallback
  ): void;
  onAddCategory(data: CategoryForm, cb?: ActionCallback): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (
  { errors, categories },
  { type }
) => {
  const error:
    | AddCategoryFailureAction["error"]
    | UpdateCategoryFailureAction["error"]
    | null = errors[type === "add" ? ADD_CATEGORY : UPDATE_CATEGORY];
  console.log(errors[UPDATE_CATEGORY]);
  console.log(error);
  const income = categories.income.map((v) => ({ id: v.id, name: v.name }));
  const expense = categories.expense.map((v) => ({ id: v.id, name: v.name }));
  return { income, expense, error: error || undefined };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch
) => ({
  onUpdateCategory: (id, data, cb) => {
    dispatch(updateCategory(id, data, cb));
  },
  onAddCategory: (data, cb) => {
    dispatch(addCategory(data, cb));
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default memo<OwnProps>(
  connect(mapStateToProps, mapDispatchToProps)(CategoryModalComponent),
  (prev, next) => {
    return prev.open === next.open && prev.type === next.type;
  }
);
