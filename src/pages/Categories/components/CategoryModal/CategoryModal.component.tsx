import React, { FC } from "react";
import { useForm } from "react-hook-form";
import Radio from "src/components/atoms/Radio";
import Select from "src/components/atoms/Select";
import TextField from "src/components/atoms/TextField";
import Modal from "src/components/organisms/Modal";
import { Props } from "./CategoryModal.container";

const tmpSelect = (
  <li
    className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9"
    id="listbox-option-0"
    role="option"
  >
    <div className="flex items-center">
      <img
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
        className="flex-shrink-0 w-6 h-6 rounded-full"
      />
      <span className="block ml-3 font-normal truncate">Wade Cooper</span>
    </div>

    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </li>
);

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
        <div className="px-6 overflow-visible grid grid-cols-6 sm:grid-cols-12 gap-3">
          <Radio
            className="col-span-6"
            name="type"
            value="Expense"
            label="Expense"
            ref={register}
            checked
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
            name="category"
            ref={register({ required: "Category name is required" })}
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
