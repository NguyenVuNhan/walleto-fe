import React, { FC, useState } from "react";
import AccountBallanceWalletIcon from "src/assets/Icons/AccountBalanceWallet";
import CancelIcon from "src/assets/Icons/Cancel";
import IconButton from "src/components/atoms/IconButton";
import Spinner from "src/components/atoms/Spinner";
import Animation from "src/components/molecules/Animation";
import { useInitFunction } from "src/hooks";
import WalletModal from "../WalletModal";
import { Props } from "./WalletItem.container";

const WalletItem: FC<Props> = ({
  className,
  wallet,
  onClose,
  loading,
  onGetWallet,
  onDeleteWallet,
}) => {
  useInitFunction(onGetWallet, wallet?.id);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"add" | "update">("add");

  if (wallet === null || loading) return <Spinner className="h-16" />;

  const onModalClose = () => {
    setModalOpen(false);
    setModalType("add");
  };

  const onEditWallet = () => {
    setModalType("update");
    setModalOpen(true);
  };

  return (
    <>
      <Animation className={["py-2", className].join(" ")}>
        <div className="pl-3">
          <AccountBallanceWalletIcon className="float-left w-12 h-12 p-2 mr-4 rounded-full bg-background bg-opacity-80 text-secondary" />
          <IconButton
            className="float-right text-red-400 hover-scale-110"
            onClick={onClose}
          >
            <CancelIcon />
          </IconButton>
          <p className="font-semibold">{wallet.name}</p>
          <div className="mx-16">
            <p>{wallet.currency}</p>
            <div className="w-48 divider clear-both"></div>
            {wallet.exclude && (
              <p>
                This wallet and its balance will be excluded from total balance
              </p>
            )}
            {wallet.archived && (
              <p>
                This wallet is freezed. No transaction can be made with this
                wallet
              </p>
            )}
            <div
              className={[
                "text-5xl my-2",
                wallet.balance >= 0 ? "text-green-600" : "text-red-500",
              ].join(" ")}
            >
              {wallet.balance}
            </div>
          </div>
        </div>
        <div className="my-2 divider"></div>
        <div className="flex justify-end px-2 mt-2 gap-2">
          <button className="w-24 btn btn-error" onClick={onDeleteWallet}>
            Delete
          </button>
          <button className="w-24 btn btn-secondary" onClick={onEditWallet}>
            Edit
          </button>
        </div>
      </Animation>
      <WalletModal
        open={modalOpen}
        onClose={onModalClose}
        type={modalType}
        wallet={wallet}
      />
    </>
  );
};

export default WalletItem;
