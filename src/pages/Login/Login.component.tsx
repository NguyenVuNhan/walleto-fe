import React, { FC } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/forgot_password" className="text-blue-400 text-center my-2">
        Forgot Password?
      </Link>
      <Link
        to="/register"
        className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg text-center text-center"
      >
        Create New Account
      </Link>
    </form>
  );
};

export default Login;
