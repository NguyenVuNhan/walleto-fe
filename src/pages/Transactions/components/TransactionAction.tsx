import React, { useState } from "react";
import TransactionModal from "./TransactionModal";

const WalletAction = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-contained-primary"
        onClick={() => setModalOpen(true)}
      >
        Add Transaction
      </button>
      <TransactionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        type="add"
      />
    </>
  );
};

export default WalletAction;
