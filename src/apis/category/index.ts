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
