import React, { FC } from "react";
import { Link } from "react-router-dom";
import TextField from "../../components/atoms/TextField";

interface Props {}

const Register: FC<Props> = () => {
  return (
    <form className="w-full flex flex-col">
      <TextField label="User Name" />
      <TextField label="Email" />
      <TextField label="Password" type="password" />
      <TextField label="Confirm Password" type="password" />
      <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">
        Register
      </button>
      <Link to="/forgot_password" className="text-blue-400 text-center my-2">
        Forgot Password?
      </Link>
      <Link
        to="/login"
        className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg text-center"
      >
        Login To Your Account
      </Link>
    </form>
  );
};

export default Register;
