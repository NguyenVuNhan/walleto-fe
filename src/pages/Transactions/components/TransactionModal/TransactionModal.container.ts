import { connect } from "react-redux";
import TransactionModalComponent from "./TransactionModal.component";

type modalType = "add" | "update";

interface OwnProps {
  open: boolean;
  type?: modalType;
  onClose?: () => void;
}

export type Props = OwnProps;
export default connect(null, null)(TransactionModalComponent);
