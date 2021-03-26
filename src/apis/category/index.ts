import axios from "axios";

export type GetCategoriesRes = BaseBody<{ categories: ShortCategory[] }>;
export const getCategories = async (): Promise<GetCategoriesRes> => {
  const res = await axios.get<GetCategoriesRes>("/api/category");
  return res.data;
};

export type AddCategoryRes = BaseBody<Category>;
export const addCategory = async (
  data: CategoryForm
): Promise<AddCategoryRes> => {
  const res = await axios.post<AddCategoryRes>("/api/category", data);
  return res.data;
};

export type UpdateCategoryRes = BaseBody<Category>;
export const updateCategory = async (
  id: number,
  data: Partial<CategoryForm>
): Promise<UpdateCategoryRes> => {
  console.log(id, data);
  const res = await axios.post<UpdateCategoryRes>(`/api/category/${id}`, data);
  return res.data;
};

export type DeleteCategoryRes = BaseBody<Category>;
export const deleteCategory = async (
  data: number
): Promise<DeleteCategoryRes> => {
  const res = await axios.delete<DeleteCategoryRes>(`/api/category/${data}`);
  return res.data;
};
