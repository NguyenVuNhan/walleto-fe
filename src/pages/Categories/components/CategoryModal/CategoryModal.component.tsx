import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "src/components/atoms/Alert";
import Radio from "src/components/atoms/Radio";
import Select from "src/components/atoms/Select";
import TextField from "src/components/atoms/TextField";
import Modal from "src/components/organisms/Modal";
import { Props } from "./CategoryModal.container";

const CategoryModal: FC<Props> = ({
  open,
  onClose,
  onAddCategory,
  onUpdateCategory,
  error,
  income,
  expense,
  type = "add",
  category,
}) => {
  const { handleSubmit, register, errors } = useForm<CategoryForm>({
    defaultValues: { ...category },
  });
  const [currentType, setCurrentType] = useState<"Expense" | "Income">(
    "Expense"
  );

  const onSubmit = (data: Partial<CategoryForm>) => {
    const cb = (type?: string) => {
      type === "success" && onClose && onClose();
    };
    if (type === "add") {
      onAddCategory(data as CategoryForm, cb);
    } else {
      if (data.name === category?.name) delete data.name;
      onUpdateCategory(category?.id as number, data, cb);
    }
  };

  return (
    <Modal
      className="bg-background text-onSurface"
      open={open}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-2 pt-5">
          <p className="font-serif text-3xl">Add category</p>
          <div className="my-2 divider"></div>
        </div>
        <div className="px-6 overflow-visible grid grid-cols-6 sm:grid-cols-12 gap-3">
          {error && <Alert className="col-span-full">{error?.msg}</Alert>}
          {(!category || category.type === "Expense") && (
            <Radio
              className="col-span-6"
              name="type"
              value="Expense"
              label="Expense"
              ref={register}
              onClick={() => setCurrentType("Expense")}
              defaultChecked={type === "add" || category?.type === "Expense"}
            />
          )}
          {(!category || category.type === "Income") && (
            <Radio
              className="col-span-6"
              name="type"
              value="Income"
              label="Income"
              onClick={() => setCurrentType("Income")}
              ref={register}
              defaultChecked={category?.type === "Income"}
            />
          )}
          <TextField
            className="col-span-full input-outlined"
            label="Category name"
            name="name"
            ref={register({ required: "Category name is required" })}
            error={errors.name && errors.name.message}
            defaultValue={category?.name}
          />
          {!category?.parent && (
            <Select
              className="col-span-full input-outlined"
              label="Parent category"
              name="parent"
              ref={register}
              defaultValue={category?.parent || ""}
            >
              <option value="-1">None</option>
              {currentType === "Expense" &&
                expense.map((v, i) => (
                  <option value={v.id} key={`expense-${i}`}>
                    {v.name}
                  </option>
                ))}
              {currentType === "Income" &&
                income.map((v, i) => (
                  <option value={v.id} key={`income-${i}`}>
                    {v.name}
                  </option>
                ))}
            </Select>
          )}{" "}
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

export default CategoryModal;
