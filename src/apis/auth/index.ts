import axios from "axios";

export type LoginResponseData = BaseBody<{
  user: User;
  token: string;
}>;
export const login = async (user: LoginForm): Promise<LoginResponseData> => {
  const res = await axios.post<LoginResponseData>("/api/auth/login", user);
  return res.data;
};
