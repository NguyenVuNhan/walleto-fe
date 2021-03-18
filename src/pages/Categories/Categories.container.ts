import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { getCategories } from "./Categories.actions";
import CategoriesComponent from "./Categories.component";

interface OwnProps {}

type StateProps = {
  [key in "income" | "expense"]: ShortCategory[];
};

interface DispatchProps {
  onGetCategories(): void;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = ({
  categories,
}) => {
  return { ...categories };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch
) => ({
  onGetCategories: () => {
    dispatch(getCategories());
  },
});

export type Props = OwnProps & StateProps & DispatchProps;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesComponent);
