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
      <div className="flex justify-end w-full gap-2">
        <button className="btn w-24 btn-error">Delete</button>
        <button
          className="w-24 btn btn-secondary"
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
        "py-1 flex items-center hover:bg-onSurface hover:bg-opacity-10 flex-wrap",
        isParent ? "mb-2 pl-3" : "mb-1 pl-6",
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
        <div key={category.id} className="py-2">
          {categoryItem(category)}
          {category.children.map((c) => categoryItem(c, false))}
        </div>
      ))}
    </>
  );

  return (
    <div className="flex justify-center text-onSurface">
      <CategoryModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="w-full md:w-1/2 widget-base">
        <p className="w-full p-2 font-serif text-5xl font-medium text-center">
          Categories
        </p>

        <div className="w-full p-2 font-medium bg-background">Expense</div>
        <div className="">{categoryList(expense)}</div>
        <div className="w-full p-2 font-medium bg-background">Income</div>
        <div className="">{categoryList(income)}</div>
      </div>
    </div>
  );
};

export default Categories;
