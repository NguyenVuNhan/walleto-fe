import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { addCategory } from "./CategoryModal.actions";
import CategoryModalComponent from "./CategoryModal.component";
import { AddCategoryFailureAction, ADD_CATEGORY } from "./CategoryModal.types";

type modalType = "add" | "update";

interface OwnProps {
  open: boolean;
  type?: modalType;
  onClose?: () => void;
}

interface StateProps {
  error?: AddCategoryFailureAction["error"];
  income: { id: number; name: string }[];
  expense: { id: number; name: string }[];
}

interface DispatchProps {
  onUpdateCategory(data: CategoryForm): void;
  onAddCategory(data: CategoryForm, cb: ActionCallback): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = ({
  errors,
  categories,
}) => {
  const error: AddCategoryFailureAction["error"] | null = errors[ADD_CATEGORY];
  const income = categories.income.map((v) => ({ id: v.id, name: v.name }));
  const expense = categories.expense.map((v) => ({ id: v.id, name: v.name }));
  return { income, expense, error: error || undefined };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch
) => ({
  onUpdateCategory: (data) => {
    console.log(data);
  },
  onAddCategory: (data, cb) => {
    dispatch(addCategory(data, cb));
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryModalComponent);
