import React, { FC, KeyboardEventHandler, useEffect } from "react";
import { useForm } from "react-hook-form";
import Alert from "src/components/atoms/Alert";
import CheckBox from "src/components/atoms/CheckBox";
import TextField from "src/components/atoms/TextField";
import Modal from "src/components/organisms/Modal";
import { Props } from "./WalletModal.container";

const WalletModal: FC<Props> = ({
  open,
  onClose,
  type,
  error,
  onSubmit,
  clearError,
  wallet,
}) => {
  const { handleSubmit, register, errors, setValue } = useForm<WalletForm>();

  useEffect(() => {
    clearError(error);
  }, [open]);

  const callback = (type?: string) => {
    type === "success" && onClose && onClose();
  };

  // const numberFieldHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
  //   if (!/\d/.test(e.key)) {
  //     e.preventDefault();
  //   }

  //   var n = parseInt(e.currentTarget.value.replace(/\D/g, ""), 10);
  //   setValue("balance", n.toLocaleString());
  // };

  return (
    <Modal
      className="bg-background text-onSurface"
      open={open}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit(onSubmit(callback))}>
        <div className="px-2 pt-5">
          <p className="font-serif text-3xl">
            {type === "update" ? "Update" : "Add"} New Wallet
          </p>
          <div className="my-2 divider"></div>
        </div>
        <div className="px-6 overflow-visible grid grid-cols-6 gap-3">
          {error && <Alert className="col-span-full">{error?.msg}</Alert>}
          <TextField
            className="col-span-full input-outlined"
            label="Wallet name"
            name="name"
            ref={register({ required: "Wallet name is required" })}
            error={errors.name && errors.name.message}
            defaultValue={wallet?.name}
          />
          <TextField
            className="col-span-full sm:col-span-4 input-outlined"
            label="Currency"
            name="currency"
            ref={register({
              required: "Currency is required",
              minLength: { value: 3, message: "Invalid currency" },
              maxLength: { value: 3, message: "Invalid currency" },
            })}
            error={errors.currency && errors.currency.message}
            defaultValue={wallet?.currency}
          />
          <TextField
            className="col-span-full sm:col-span-2 input-outlined"
            label="Initial Balance"
            name="balance"
            ref={register({
              setValueAs: (v: string) => parseInt(v.replaceAll(",", ""), 10),
            })}
            type="number"
            error={errors.balance && errors.balance.message}
            defaultValue={wallet?.balance || 0}
          />
          <CheckBox
            className="col-span-full"
            label="Exclude from total"
            name="exclude"
            ref={register}
            defaultChecked={wallet ? wallet.exclude : false}
          />
          {type === "update" && (
            <CheckBox
              className="col-span-full"
              label="Archive this wallet"
              name="archived"
              ref={register}
              defaultChecked={wallet ? wallet.archived : false}
            />
          )}
        </div>
        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2">
          <button type="submit" className="btn btn-outlined-secondary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-outlined-error"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default WalletModal;
