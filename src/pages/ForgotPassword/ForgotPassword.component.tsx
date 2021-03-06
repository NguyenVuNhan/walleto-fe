import React, { FC } from "react";
import { Link } from "react-router-dom";
import TextField from "src/components/atoms/TextField";

interface Props {}

const Register: FC<Props> = () => {
  return (
    <form className="w-full flex flex-col gap-2">
      <TextField label="Email" />
      <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">
        Reset password
      </button>
      <p className="text-xl text-center font-bold mt-3">Or</p>
      <Link
        to="/login"
        className="w-full bg-green-400 mt-2 mb-4 text-white p-3 rounded-lg font-semibold text-lg text-center"
      >
        Login To Your Account
      </Link>
    </form>
  );
};

export default Register;
