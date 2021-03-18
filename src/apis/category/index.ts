import axios from "axios";

export type GetCategoriesRes = BaseBody<{ categories: ShortCategory[] }>;
export const getCategories = async (): Promise<GetCategoriesRes> => {
  const res = await axios.get<GetCategoriesRes>("/api/category");
  return res.data;
};
