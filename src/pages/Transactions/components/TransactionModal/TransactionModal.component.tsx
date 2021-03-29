import React, { FC } from "react";
import Modal from "src/components/organisms/Modal";
import { Props } from "./TransactionModal.container";

const TransactionModal: FC<Props> = ({ open, onClose, type }) => {
  return (
    <Modal
      className="bg-background text-onSurface"
      open={open}
      onClose={onClose}
    >
      <form>
        <div className="px-2 pt-5">
          <p className="font-serif text-3xl">
            {type === "update" ? "Update" : "Add"} New Wallet
          </p>
          <div className="my-2 divider"></div>
        </div>
        <div className="px-6 overflow-visible grid grid-cols-6 gap-3">
          Modal body
        </div>
      </form>
    </Modal>
  );
};

export default TransactionModal;
