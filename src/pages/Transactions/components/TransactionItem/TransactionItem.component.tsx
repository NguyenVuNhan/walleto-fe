import React, { FC, useState } from "react";
import { MdLocalMall, MdCancel } from "react-icons/md";
import IconButton from "src/components/atoms/IconButton";
import Spinner from "src/components/atoms/Spinner";
import Animation from "src/components/molecules/Animation";
import { useInitFunction } from "src/hooks";
import TransactionModal from "../TransactionModal";
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
  const [modalOpen, setModalOpen] = useState(false);

  if (transaction === null || loading) return <Spinner className="h-32" />;

  return (
    <>
      <TransactionModal
        open={modalOpen}
        type="update"
        onClose={() => setModalOpen(false)}
        transaction={transaction}
      />
      <Animation className={["w-full bg-surface", className].join(" ")}>
        <MdLocalMall className="float-left w-12 h-12 p-2 mr-4 bg-background bg-opacity-80 rounded-full text-secondary" />
        <IconButton
          className="float-right text-red-400 hover-scale-110"
          onClick={onClose}
        >
          <MdCancel />
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
          <button
            className="w-24 btn btn-secondary"
            onClick={() => setModalOpen(true)}
          >
            Edit
          </button>
        </div>
      </Animation>
    </>
  );
};

export default TransactionItem;
