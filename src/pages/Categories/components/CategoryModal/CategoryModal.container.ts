import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { addCategory } from "./CategoryModal.actions";
import CategoryModalComponent from "./CategoryModal.component";
import { AddCategoryFailureAction, ADD_CATEGORY } from "./CategoryModal.types";

interface OwnProps {
  open: boolean;
  onClose?: () => void;
}

interface StateProps {
  error?: AddCategoryFailureAction["error"];
}

interface DispatchProps {
  onUpdateCategory(data: CategoryForm): void;
  onAddCategory(data: CategoryForm): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = ({ errors }) => {
  const error: AddCategoryFailureAction["error"] | null = errors[ADD_CATEGORY];
  if (error) return { error };
  else return {};
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch
) => ({
  onUpdateCategory: (data) => {
    console.log(data);
  },
  onAddCategory: (data) => {
    dispatch(addCategory(data));
    console.log(data);
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryModalComponent);
