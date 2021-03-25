import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { deleteCategory, getCategories } from "./Categories.actions";
import CategoriesComponent from "./Categories.component";
import {
  DeleteCategoryFailureAction,
  DELETE_CATEGORY,
} from "./Categories.types";

interface OwnProps {}

type StateProps = {
  [key in "income" | "expense"]: ShortCategory[];
} & {
  error?: DeleteCategoryFailureAction["error"];
};

interface DispatchProps {
  onGetCategories(): void;
  onDeleteCategory(id: number): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = ({
  categories,
  errors,
}) => {
  const error: DeleteCategoryFailureAction["error"] | null =
    errors[DELETE_CATEGORY];
  if (error) return { error, ...categories };
  else return { ...categories };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch
) => ({
  onGetCategories: () => {
    dispatch(getCategories());
  },
  onDeleteCategory: (id) => {
    dispatch(deleteCategory(id));
    dispatch(getCategories());
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesComponent);
