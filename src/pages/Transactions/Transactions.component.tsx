import React, { FC } from "react";
import Button from "src/components/atoms/Button";
import { useInitFunction } from "src/hooks";
import TransactionList from "./components/TransactionList";
import { Props } from "./Transactions.container";

const Transactions: FC<Props> = ({ transactionData, onGetTransactions }) => {
  useInitFunction(onGetTransactions);

  return (
    <div className="flex justify-center">
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

        <div className="m-1 border border-gray-400"></div>
        <div className="flex justify-center px-4 py-2">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 hover-scale-105">
            New Transaction
          </Button>
        </div>

        <TransactionList transactionData={transactionData} />
      </div>
    </div>
  );
};

export default Transactions;
