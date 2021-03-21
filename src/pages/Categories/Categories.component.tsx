import React, { FC, useState } from "react";
import CancelIcon from "src/assets/Icons/Cancel";
import LocalMallIcon from "src/assets/Icons/LocalMall";
import IconButton from "src/components/atoms/IconButton";
import { useInitFunction } from "src/hooks";
import { Props } from "./Categories.container";
import CategoryModal from "./components/CategoryModal/CategoryModal.component";

const Categories: FC<Props> = ({ onGetCategories, income, expense }) => {
  useInitFunction(onGetCategories);

  const [activeCategory, setActiveCategory] = useState(-1);
  const [modalOpen, setModalOpen] = useState(false);

  const expandCategory = (id: number) => {
    if (activeCategory === -1 || activeCategory !== id) setActiveCategory(id);
  };

  const expandOptions = (id: number) => (
    <>
      <div className="flex-grow">
        <IconButton
          className="float-right text-red-400 hover-scale-110"
          onClick={() => setActiveCategory(-1)}
        >
          <CancelIcon />
        </IconButton>
      </div>
      <div className="flex justify-end w-full">
        <button className="w-24 text-red-400 hover:bg-red-100">Delete</button>
        <button
          className="w-24 text-green-400 hover:bg-green-100"
          onClick={() => setModalOpen(true)}
        >
          Edit
        </button>
      </div>
    </>
  );

  const categoryItem = (
    { id, ...category }: ShortCategory,
    isParent: boolean = true
  ) => (
    <div
      key={id}
      className={[
        "flex items-center hover:bg-gray-200 flex-wrap",
        isParent ? "pb-2" : "pb-1 pl-3",
      ].join(" ")}
      onClick={() => expandCategory(id)}
    >
      <LocalMallIcon
        className={[
          "p-2 mr-4 text-yellow-500 bg-gray-200 rounded-full",
          isParent ? "w-12 h-12" : "w-10 h-10",
        ].join(" ")}
      />
      {category.name}
      {activeCategory === id && expandOptions(id)}
    </div>
  );

  const categoryList = (categories: ShortCategory[]) => (
    <>
      {categories.map((category) => (
        <div key={category.id} className="pt-1 border-b">
          {categoryItem(category)}
          {category.children.map((c) => categoryItem(c, false))}
        </div>
      ))}
    </>
  );

  return (
    <div className="flex justify-center">
      <CategoryModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="w-full md:w-1/2 widget-base">
        <p className="font-serif text-5xl font-medium text-center w-full p-2">
          Categories
        </p>

        <div className="w-full p-2 font-medium bg-gray-100">Expense</div>
        <div className="pl-3">{categoryList(expense)}</div>
        <div className="w-full p-2 font-medium bg-gray-100">Income</div>
        <div className="pl-3">{categoryList(income)}</div>
      </div>
    </div>
  );
};

export default Categories;
