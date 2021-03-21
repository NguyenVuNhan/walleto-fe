import React, { FC } from "react";
import { useForm } from "react-hook-form";
import Modal from "src/components/organisms/Modal";
import { Props } from "./CategoryModal.container";

const CategoryModal: FC<Props> = ({ open, onClose }) => {
  const { handleSubmit } = useForm();

  const addCategory = (data: any) => {
    console.log(data);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(addCategory)}>
        <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
          <p className="text-xl">Add category</p>
          <div className="w-full border"></div>
        </div>
        <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Submit
          </button>
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
