import React, { useState } from "react";
import WalletModal from "./WalletModal";

const WalletAction = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-contained-primary"
        onClick={() => setModalOpen(true)}
      >
        Add Wallet
      </button>
      <WalletModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default WalletAction;
