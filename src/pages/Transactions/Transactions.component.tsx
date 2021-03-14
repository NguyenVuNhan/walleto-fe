import React, { FC } from "react";
import { useInitFunction } from "src/hooks";
import TransactionList from "./components/TransactionList";
import { Props } from "./Transactions.container";

const Transactions: FC<Props> = ({ transactionData, onGetTransactions }) => {
  useInitFunction(onGetTransactions);

  return (
    <div className="flex justify-center gap-5">
      <div className="w-full md:w-1/2 widget-base">
        <p className="w-full font-serif text-5xl font-medium text-center">
          Transaction
        </p>
        {/* General info*/}
        <div className="m-1 border border-gray-400"></div>
        <div className="px-4">
          <div className="flex justify-between w-100">
            <label>Inflow:</label>
            <p className="text-green-600">200</p>
          </div>
          <div className="flex justify-between w-100 ">
            <label>Outflow:</label>
            <p className="text-red-600">-100</p>
          </div>
          <div className="float-right pl-3 mb-2 border-t-2 ">100</div>
          <div className="clear-both"></div>
        </div>
        <TransactionList transactionData={transactionData} />
      </div>
    </div>
  );
};

export default Transactions;
