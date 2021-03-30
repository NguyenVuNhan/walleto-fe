import React, { FC, Fragment, useRef } from "react";
import { useForm } from "react-hook-form";
import Alert from "src/components/atoms/Alert";
import CheckBox from "src/components/atoms/CheckBox";
import Select from "src/components/atoms/Select";
import Spinner from "src/components/atoms/Spinner";
import TextField from "src/components/atoms/TextField";
import Modal from "src/components/organisms/Modal";
import { dateValue, numberValue } from "src/helpers/form";
import { useInitFunction } from "src/hooks";
import { Props } from "./TransactionModal.container";

const TransactionModal: FC<Props> = ({
  open,
  onClose,
  transaction,
  type,
  wallets,
  incomeCategories,
  expenseCategories,
  error,
  loading,
  fetchData,
  onSubmit,
}) => {
  useInitFunction(fetchData);
  const { handleSubmit, register, errors } = useForm<TransactionForm>();
  const amountMultiplier = useRef(
    transaction ? (transaction.amount > 0 ? 1 : -1) : -1
  );

  console.log(transaction, type);

  const callback = (type?: string) => {
    type === "success" && onClose && onClose();
  };

  const renderCategories = (
    categories: ShortCategory[],
    label: string,
    onClick: () => void
  ) => (
    <optgroup label={label}>
      {categories.map((v) => (
        <Fragment key={v.id}>
          <option value={v.id} onClick={onClick}>
            {v.name}
          </option>
          {v.children.length > 0 &&
            v.children.map((c) => (
              <option
                key={c.id}
                value={c.id}
                className="text-sm"
                onClick={onClick}
              >
                &nbsp;&nbsp;&nbsp;{c.name}
              </option>
            ))}
        </Fragment>
      ))}
    </optgroup>
  );

  return (
    <Modal
      className="bg-background text-onSurface md:max-w-2xl"
      open={open}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit(onSubmit(callback))}>
        <div className="px-2 pt-5">
          <p className="font-serif text-3xl">
            {type === "update" ? "Update" : "Add"} New Transaction
          </p>
          <div className="my-2 divider"></div>
        </div>
        {loading ? (
          <Spinner className="w-full my-2" />
        ) : (
          <div className="px-6 overflow-visible grid grid-cols-6 gap-3">
            {error && <Alert className="col-span-full">{error?.msg}</Alert>}
            <Select
              className="col-span-3 md:col-span-2 input-outlined"
              label="Wallet"
              name="walletId"
              ref={register({
                required: "Wallet is required",
                valueAsNumber: true,
              })}
              error={
                error?.errors?.walletId ||
                (errors.walletId && errors.walletId.message)
              }
              defaultValue={transaction?.wallet.id || ""}
            >
              {wallets?.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </Select>

            <Select
              className="col-span-3 md:col-span-2 input-outlined"
              label="Category"
              name="categoryId"
              ref={register({
                required: "Category is required",
                valueAsNumber: true,
              })}
              error={
                error?.errors?.categoryId ||
                (errors.categoryId && errors.categoryId.message)
              }
              defaultValue={transaction?.category.id || ""}
            >
              {incomeCategories &&
                renderCategories(
                  incomeCategories,
                  "Income",
                  () => (amountMultiplier.current = 1)
                )}
              {expenseCategories &&
                renderCategories(
                  expenseCategories,
                  "Expense",
                  () => (amountMultiplier.current = -1)
                )}
            </Select>

            <TextField
              className="col-span-3 md:col-span-2 input-outlined"
              label="Amount"
              type="number"
              name="amount"
              ref={register({
                required: "Transaction amount must be given",
                setValueAs: (v: string) =>
                  numberValue(v) * amountMultiplier.current,
              })}
              error={
                error?.errors?.amount ||
                (errors.amount && errors.amount.message)
              }
              defaultValue={transaction?.amount}
            />

            <TextField
              className="col-span-3 md:col-span-2 input-outlined"
              label="Date"
              type="date"
              name="date"
              ref={register({ setValueAs: dateValue })}
              error={
                error?.errors?.date || (errors.date && errors.date.message)
              }
              defaultValue={new Date(
                transaction ? transaction.date : new Date()
              )
                .toISOString()
                .slice(0, 10)}
            />

            <TextField
              className="col-span-full md:col-span-4 input-outlined"
              label="Note"
              name="note"
              ref={register}
              error={
                error?.errors?.note || (errors.note && errors.note.message)
              }
              defaultValue={transaction?.note}
            />

            <CheckBox
              className="col-span-full"
              label="Exclude from report"
              name="exclude"
              ref={register}
              defaultChecked={transaction?.exclude || false}
            />
          </div>
        )}
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

export default TransactionModal;
