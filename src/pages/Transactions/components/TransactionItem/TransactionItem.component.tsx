import React, { FC } from "react";
import CancelIcon from "src/assets/Icons/Cancel";
import LocalMallIcon from "src/assets/Icons/LocalMall";
import Button from "src/components/atoms/Button";
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
  id,
}) => {
  useInitFunction(onGetTransaction, id, transaction?.id);

  if (transaction === null || transaction.id !== id)
    return (
      <div className="flex justify-center align-center py-5 h-32 w-full">
        <Spinner />
      </div>
    );

  const deleteTransaction = () => {
    onDeleteTransaction(id);
  };

  return (
    <Animation className={["w-full", className].join(" ")}>
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
        <div className="w-48 my-2 border border-gray-200 clear-both"></div>
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
      <div className="my-2 border border-gray-200"></div>
      <div className="flex justify-end">
        <Button
          className="w-24 text-red-400 hover:bg-red-100"
          onClick={deleteTransaction}
        >
          Delete
        </Button>
        <Button className="w-24 text-green-400 hover:bg-green-100">Edit</Button>
      </div>
    </Animation>
  );
};

export default TransactionItem;
