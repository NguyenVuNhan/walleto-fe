import CategoryModalComponent from "./CategoryModal.component";

interface OwnProps {
  open: boolean;
  onClose?: () => void;
}

export type Props = OwnProps;
export default CategoryModalComponent;
