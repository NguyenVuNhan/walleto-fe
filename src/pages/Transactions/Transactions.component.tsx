import React, { FC } from "react";
import { useInitFunction } from "src/hooks";
import TransactionList from "./components/TransactionList";
import { Props } from "./Transactions.container";

const Transactions: FC<Props> = ({
  inflow,
  outflow,
  total,
  transactions,
  onGetTransactions,
}) => {
  useInitFunction(onGetTransactions);

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-1/2 widget-base">
        <p className="w-full font-serif text-5xl font-medium text-center">
          Transaction
        </p>
        {/* General info*/}
        <div className="divider"></div>
        <div className="px-4">
          <div className="flex justify-between w-100">
            <label>Inflow:</label>
            <p className="text-green-600">{inflow}</p>
          </div>
          <div className="flex justify-between w-100 ">
            <label>Outflow:</label>
            <p className="text-red-600">{outflow}</p>
          </div>
          <div className="float-right pl-6 mb-2 divider max-w-min">{total}</div>
          <div className="clear-both"></div>
        </div>

        <TransactionList transactionData={transactions} />
      </div>
    </div>
  );
};

export default Transactions;
