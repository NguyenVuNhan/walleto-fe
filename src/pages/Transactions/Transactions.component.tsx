import React, { FC, Fragment } from "react";
import LocalMallIcon from "src/assets/Icons/LocalMall";
import { getMonth, getWeekday } from "src/helpers/date";
import { TransactionsState } from "./Transactions.reducer";

interface Props {
  transactionData: TransactionsState;
}

const Transactions: FC<Props> = ({ transactionData }) => {
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

        {/* Transaction Details */}
        {Object.entries(transactionData).map(([key, data], index) => {
          const date = new Date(key);
          const d = date.getUTCDate();
          const weekday = getWeekday(date.getUTCDay());
          const m = getMonth(date.getUTCMonth());
          const y = date.getUTCFullYear();
          return (
            <Fragment key={index}>
              <div className="w-full py-3 bg-gray-50"></div>
              <div className="p-2">
                <p className="float-left mr-5 text-5xl">
                  {d / 10 < 1 ? "0" + d : "" + d}
                </p>
                <p className="float-right my-2 text-2xl">{data.total}</p>
                <p className="font-medium text-gray-600">{weekday}</p>
                <p className="font-medium text-gray-400">
                  {m}-{y}
                </p>
              </div>
              <div className="w-full border"></div>
              {data.transactions.map((transaction) => (
                <div key={transaction.id} className="p-2 my-2 ">
                  <LocalMallIcon className="float-left w-12 h-12 p-2 mr-4 bg-gray-100 rounded-full text-yellow-400" />
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
                  <p className="text-gray-400">{transaction.note}</p>
                  <div className="clear-both"></div>
                </div>
              ))}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Transactions;
