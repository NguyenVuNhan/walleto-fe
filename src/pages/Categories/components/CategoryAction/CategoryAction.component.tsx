import React, { FC, useState } from "react";
import CategoryModal from "../CategoryModal";

const CategoryAction: FC = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <button
        className="btn bg-blue-400 text-base text-gray-900 text-base"
        onClick={() => setModalOpen(true)}
      >
        Add Category
      </button>
      <CategoryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default CategoryAction;
