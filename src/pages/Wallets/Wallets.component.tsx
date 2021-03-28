import { AnimatePresence } from "framer-motion";
import React, { FC, useState } from "react";
import AccountBallanceWalletIcon from "src/assets/Icons/AccountBalanceWallet";
import Alert from "src/components/atoms/Alert";
import { useInitFunction } from "src/hooks";
import { Props } from "./Wallets.container";
import Animation from "src/components/molecules/Animation";
import WalletItem from "./components/WalletItem";

const Wallets: FC<Props> = ({ wallets, error, onGetWallets, clearError }) => {
  // Fetch all wallets
  useInitFunction(onGetWallets);
  // Clear exist errors
  useInitFunction(clearError, error);

  const [activeWallet, setActiveWallet] = useState(-1);

  return (
    <div className="flex justify-center text-onSurface">
      <div className="w-full pb-2 md:w-1/2 widget-base">
        <p className="w-full p-2 font-serif text-5xl font-medium text-center">
          Wallets
        </p>
        <div className="divider"></div>

        {error && (
          <div className="px-2">
            <Alert>{error?.msg}</Alert>
          </div>
        )}

        {wallets &&
          wallets.map((wallet) => (
            <div
              key={`wallet-${wallet.id}`}
              className="text-onSurface hover:bg-onSurface hover:bg-opacity-10"
            >
              <AnimatePresence>
                {activeWallet === wallet.id ? (
                  <WalletItem
                    id={wallet.id}
                    onClose={() => setActiveWallet(-1)}
                  />
                ) : (
                  <Animation
                    className="py-2 pl-3"
                    onClick={() => setActiveWallet(wallet.id)}
                  >
                    <AccountBallanceWalletIcon className="float-left w-12 h-12 p-2 mr-4 bg-background bg-opacity-80 rounded-full text-secondary" />
                    <p className="font-semibold">{wallet.name}</p>
                    <p className="text-opacity-80">{wallet.balance}</p>
                    <div className="clear-both"></div>
                  </Animation>
                )}
              </AnimatePresence>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Wallets;
