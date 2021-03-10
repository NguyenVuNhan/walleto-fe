import React, { memo } from "react";
import AccountBallanceWalletIcon from "src/assets/Icons/AccountBalanceWallet";
import AnalyticIcon from "src/assets/Icons/Analytics";
import CategoryIcon from "src/assets/Icons/Category";
import ReceiptLongIcon from "src/assets/Icons/ReceiptLong";
import IconButton from "../atoms/IconButton";

interface Props {
  open: boolean;
}

const Drawer = memo<Props>(({ open }) => {
  // TODO: Add active state for each item
  return (
    <aside
      className={[
        "bg-gray-600 text-white drawer transform ease-in-out transition-all duration-300 gap-1",
        open ? "w-screen sm:w-64" : "w-0 sm:w-16",
      ].join(" ")}
    >
      <div className="list-item">
        <IconButton className="mr-3">
          <ReceiptLongIcon />
        </IconButton>
        <p className="text-lg">Transaction</p>
      </div>
      <div className="list-item">
        <IconButton className="mr-3">
          <AnalyticIcon />
        </IconButton>
        <p className="text-lg">Expenses Report</p>
      </div>
      <div className="m-1 border border-gray-400"></div>
      <div className="list-item">
        <IconButton className="mr-3">
          <AccountBallanceWalletIcon />
        </IconButton>
        <p className="text-lg">Wallets</p>
      </div>
      <div className="list-item">
        <IconButton className="mr-3">
          <CategoryIcon />
        </IconButton>
        <p className="text-lg">Categories</p>
      </div>
    </aside>
  );
});

export default Drawer;
