import React, { FC, useState } from "react";
import { MdCancel, MdLocalMall } from "react-icons/md";
import Alert from "src/components/atoms/Alert";
import IconButton from "src/components/atoms/IconButton";
import { useInitFunction } from "src/hooks";
import { Props } from "./Categories.container";
import CategoryModal from "./components/CategoryModal";
import { CategoryProp } from "./components/CategoryModal/CategoryModal.container";

const Categories: FC<Props> = ({
  onGetCategories,
  onDeleteCategory,
  error,
  clearError,
  income,
  expense,
}) => {
  // Fetch data
  useInitFunction(onGetCategories);
  useInitFunction(clearError, error);

  const [activeCategory, setActiveCategory] = useState(-1);
  const [editingCategory, setEditingCategory] = useState<CategoryProp>();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"add" | "update">("add");

  const onModalClose = () => {
    setModalOpen(false);
    setModalType("add");
    clearError();
  };

  const expandCategory = (id: number) => {
    if (activeCategory === -1 || activeCategory !== id) setActiveCategory(id);
  };

  const deleteCategory = () => {
    activeCategory >= 0 && onDeleteCategory(activeCategory);
  };

  const editCategory = (category: CategoryProp) => () => {
    setEditingCategory(category);
    setModalType("update");
    setModalOpen(true);
  };

  const categoryItem = ({ id, name, type }: ShortCategory, parent?: number) => (
    <div
      key={id}
      className={[
        "py-1 flex items-center hover:bg-onSurface hover:bg-opacity-10 flex-wrap",
        parent ? "pl-6" : "pl-3",
      ].join(" ")}
      onClick={() => expandCategory(id)}
    >
      <MdLocalMall
        className={[
          "p-2 mr-4 bg-background bg-opacity-80 rounded-full text-secondary",
          parent ? "w-10 h-10" : "w-12 h-12",
        ].join(" ")}
      />
      {name}
      {activeCategory === id && (
        <>
          <div className="flex-grow">
            <IconButton
              className="float-right text-red-400 hover-scale-110"
              onClick={() => setActiveCategory(-1)}
            >
              <MdCancel />
            </IconButton>
          </div>
          <div className="flex justify-end w-full p-2 gap-2">
            <button className="w-24 btn btn-error" onClick={deleteCategory}>
              Delete
            </button>
            <button
              className="w-24 btn btn-secondary"
              onClick={editCategory({ id, type, name, parent })}
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );

  const categoryList = (categories: ShortCategory[]) => (
    <>
      {categories.map((category) => (
        <div key={category.id} className="py-2">
          {categoryItem(category)}
          {category.children.map((c) => categoryItem(c, category.id))}
        </div>
      ))}
    </>
  );

  return (
    <div className="flex justify-center text-onSurface">
      <CategoryModal
        open={modalOpen}
        onClose={onModalClose}
        type={modalType}
        category={editingCategory}
      />
      <div className="w-full md:w-1/2 widget-base">
        <p className="w-full p-2 font-serif text-5xl font-medium text-center">
          Categories
        </p>

        {error && (
          <div className="px-2">
            <Alert>{error?.msg}</Alert>
          </div>
        )}
        <div className="w-full p-2 font-medium bg-background">Expense</div>
        <div className="">{categoryList(expense)}</div>
        <div className="w-full p-2 font-medium bg-background">Income</div>
        <div className="">{categoryList(income)}</div>
      </div>
    </div>
  );
};

export default Categories;
