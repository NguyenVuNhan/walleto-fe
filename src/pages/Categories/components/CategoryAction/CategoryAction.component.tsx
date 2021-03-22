import React, { FC, useState } from "react";
import CategoryModal from "../CategoryModal";

const CategoryAction: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-contained-primary"
        onClick={() => setModalOpen(true)}
      >
        Add Category
      </button>
      <CategoryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default CategoryAction;
