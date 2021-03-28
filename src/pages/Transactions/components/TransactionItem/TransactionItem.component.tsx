import React, { FC } from "react";
import CancelIcon from "src/assets/Icons/Cancel";
import LocalMallIcon from "src/assets/Icons/LocalMall";
import IconButton from "src/components/atoms/IconButton";
import Spinner from "src/components/atoms/Spinner";
import Animation from "src/components/molecules/Animation";
import { useInitFunction } from "src/hooks";
import { Props } from "./TransactionItem.container";

const TransactionItem: FC<Props> = ({
  onGetTransaction,
  onDeleteTransaction,
  onClose,
  className,
  transaction,
  loading,
}) => {
  useInitFunction(onGetTransaction, transaction?.id);

  if (transaction === null || loading) return <Spinner className="h-32" />;

  return (
    <Animation className={["w-full bg-surface", className].join(" ")}>
      <LocalMallIcon className="float-left w-12 h-12 p-2 mr-4 text-yellow-400 bg-gray-100 rounded-full" />
      <IconButton
        className="float-right text-red-400 hover-scale-110"
        onClick={onClose}
      >
        <CancelIcon />
      </IconButton>
      <p className="font-semibold">{transaction.category.name}</p>
      <p>{transaction.wallet.name} Wallet</p>
      <div className="mx-16">
        <div className="w-48 divider clear-both"></div>
        <p className="text-justify">{transaction.note}</p>
        <div
          className={[
            "text-5xl my-2",
            transaction.amount >= 0 ? "text-green-600" : "text-red-500",
          ].join(" ")}
        >
          {transaction.amount}
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-end px-2 mt-2 gap-2">
        <button className="w-24 btn btn-error" onClick={onDeleteTransaction}>
          Delete
        </button>
        <button className="w-24 btn btn-secondary">Edit</button>
      </div>
    </Animation>
  );
};

export default TransactionItem;
