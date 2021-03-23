import React, { FC } from "react";
import { useForm } from "react-hook-form";
import Radio from "src/components/atoms/Radio";
import TextField from "src/components/atoms/TextField";
import Modal from "src/components/organisms/Modal";
import { Props } from "./CategoryModal.container";

const CategoryModal: FC<Props> = ({ open, onClose }) => {
  const { handleSubmit, register } = useForm();

  const addCategory = (data: any) => {
    console.log(data);
  };

  return (
    <Modal
      className="bg-background text-onSurface"
      open={open}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit(addCategory)}>
        <div className="px-2 pt-5">
          <p className="font-serif text-3xl">Add category</p>
          <div className="my-2 divider"></div>
        </div>
        <div className="px-6 grid grid-cols-6 sm:grid-cols-12 gap-3">
          <Radio
            className="col-span-6"
            name="type"
            value="Expense"
            label="Expense"
            ref={register}
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
            ref={register}
          />
          <div className="col-span-full">
            <select
              className="w-full from-select bg-background rounded ring-primary"
              name="cars"
              id="cars"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-2">
          <button type="button" className="btn btn-outlined-secondary">
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
