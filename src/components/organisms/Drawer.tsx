import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import AccountBallanceWalletIcon from "src/assets/Icons/AccountBalanceWallet";
import AnalyticIcon from "src/assets/Icons/Analytics";
import CategoryIcon from "src/assets/Icons/Category";
import ReceiptLongIcon from "src/assets/Icons/ReceiptLong";
import IconButton from "../atoms/IconButton";

interface Props {
  open: boolean;
}

const Drawer = memo<Props>(({ open }) => {
  return (
    <aside
      className={[
        "bg-surface text-onSurface drawer transform ease-in-out transition-all duration-300 gap-1 shadow-e4",
        open ? "w-screen sm:w-64" : "w-0 sm:w-14",
      ].join(" ")}
    >
      <NavLink
        to="/"
        className="list-item"
        activeClassName="bg-onSurface bg-opacity-10"
        isActive={(_, location) => {
          const path = location.pathname;
          if (path === "/" || path === "/transactions") return true;
          return false;
        }}
      >
        <IconButton className="mr-3">
          <ReceiptLongIcon />
        </IconButton>
        <p className="text-lg">Transaction</p>
      </NavLink>
      <NavLink
        to="report"
        className="list-item"
        activeClassName="bg-onSurface bg-opacity-10"
      >
        <IconButton className="mr-3">
          <AnalyticIcon />
        </IconButton>
        <p className="text-lg">Expenses Report</p>
      </NavLink>
      <div className="m-1 border border-gray-400"></div>
      <NavLink
        to="wallets"
        className="list-item"
        activeClassName="bg-onSurface bg-opacity-10"
      >
        <IconButton className="mr-3">
          <AccountBallanceWalletIcon />
        </IconButton>
        <p className="text-lg">Wallets</p>
      </NavLink>
      <NavLink
        to="categories"
        className="list-item"
        activeClassName="bg-onSurface bg-opacity-10"
      >
        <IconButton className="mr-3">
          <CategoryIcon />
        </IconButton>
        <p className="text-lg">Categories</p>
      </NavLink>
    </aside>
  );
});

export default Drawer;
