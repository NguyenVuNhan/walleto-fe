import React, { FC } from "react";
import TextField from "../../components/atoms/TextField";

interface Props {}

const Login: FC<Props> = () => {
  return (
    <form className="w-full md:w-1/2 flex flex-col">
      <TextField label="Email or User Name" />
      <TextField label="Password" type="password" />
      <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">
        Login
      </button>
      <a className="text-blue-400 text-center my-2">Forgot Password?</a>
      <button className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">
        Create New Account
      </button>
    </form>
  );
};

export default Login;
