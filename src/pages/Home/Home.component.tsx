import React, { FC, lazy } from "react";
import Header from "src/components/organisms/Header";
import TransactionWidget from "src/components/widgets/Transaction";
import WalletWidget from "src/components/widgets/Wallet";

/* const TransactionWidget = lazy( */
/*   () => import("src/components/widgets/Transaction") */
/* ); */

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <div className="flex-grow w-full px-1 sm:px-5 pt-6 overflow-x-hidden overflow-y-auto">
        <div className="w-full h-full bg-red-200 grid grid-flow-row grid-cols-3 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-x-4 gap-y-6 auto-rows-max">
          <WalletWidget className="border border-gray-400" />
          <TransactionWidget className="row-span-2" />
          <TransactionWidget />
          <TransactionWidget />
          <TransactionWidget />
          <TransactionWidget />
          <TransactionWidget />
          <TransactionWidget />
        </div>
      </div>
    </div>
  );
};

export default Home;
