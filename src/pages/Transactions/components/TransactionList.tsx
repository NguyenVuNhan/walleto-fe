import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment, memo, useState } from "react";
import LocalMallIcon from "src/assets/Icons/LocalMall";
import TransactionItem from "./TransactionItem";
import { TransactionsState } from "../Transactions.reducer";
import DateHeader from "./DateHeader";
import Animation from "src/components/molecules/Animation";

interface Props {
  transactionData: TransactionsState;
}

const TransactionList = memo<Props>(({ transactionData }) => {
  const [activeTransaction, setActiveTransaction] = useState(-1);

  return (
    <>
      {/* Transaction Details */}
      {Object.entries(transactionData).map(([key, data], index) => {
        return (
          <Fragment key={index}>
            <div className="w-full py-3 bg-background"></div>
            <DateHeader date={key} total={data.total} />

            {data.transactions.map((transaction) => (
              <div
                className="my-2 hover:bg-onSurface hover:bg-opacity-5"
                key={transaction.id}
              >
                <AnimatePresence>
                  {activeTransaction === transaction.id ? (
                    <TransactionItem
                      className="p-2"
                      id={transaction.id}
                      onClose={() => setActiveTransaction(-1)}
                    />
                  ) : (
                    <Animation
                      className="p-2"
                      onClick={() => setActiveTransaction(transaction.id)}
                    >
                      <LocalMallIcon className="float-left w-12 h-12 p-2 mr-4 bg-background bg-opacity-80 rounded-full text-secondary" />
                      <div
                        className={[
                          "float-right",
                          transaction.amount >= 0
                            ? "text-green-600"
                            : "text-red-500",
                        ].join(" ")}
                      >
                        {transaction.amount}
                      </div>
                      <p className="font-semibold">{transaction.category}</p>
                      <p className="overflow-hidden text-gray-400 w-44 whitespace-nowrap overflow-ellipsis">
                        {transaction.note}
                      </p>
                      <div className="clear-both"></div>
                    </Animation>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </Fragment>
        );
      })}
    </>
  );
});

export default TransactionList;
