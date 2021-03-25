import React, { FC } from "react";
import { useForm } from "react-hook-form";
import Alert from "src/components/atoms/Alert";
import Radio from "src/components/atoms/Radio";
import Select from "src/components/atoms/Select";
import TextField from "src/components/atoms/TextField";
import Modal from "src/components/organisms/Modal";
import { Props } from "./CategoryModal.container";

const CategoryModal: FC<Props> = ({ open, onClose, onAddCategory, error }) => {
  const { handleSubmit, register, errors } = useForm<CategoryForm>();

  return (
    <Modal
      className="bg-background text-onSurface"
      open={open}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit(onAddCategory)}>
        <div className="px-2 pt-5">
          <p className="font-serif text-3xl">Add category</p>
          <div className="my-2 divider"></div>
        </div>
        <div className="px-6 overflow-visible grid grid-cols-6 sm:grid-cols-12 gap-3">
          {error && <Alert className="col-span-full">{error?.msg}</Alert>}
          <Radio
            className="col-span-6"
            name="type"
            value="Expense"
            label="Expense"
            ref={register}
            defaultChecked
          />
          <Radio
            className="col-span-6"
            name="type"
            value="Income"
            label="Income"
            ref={register}
          />
          <TextField
            className="col-span-full input-outlined"
            label="Category name"
            name="name"
            ref={register({ required: "Category name is required" })}
            error={errors.name && errors.name.message}
          />
          <Select
            className="col-span-full input-outlined"
            label="Parent category"
            name="parent"
            ref={register}
          >
            <option value="-1">None</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Select>
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