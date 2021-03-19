import React, { FC, useContext } from "react";
import AppContext from "src/app/App.context";

interface Props {
  open: boolean;
}

const CategoryForm: FC<Props> = ({ open }) => {
  const { setBackDrop } = useContext(AppContext);
  setBackDrop(open);
  return <div className="w-48 h-48 bg-white"> Modal</div>;
};

export default CategoryForm;
