import React, { FC } from "react";
import login from "../../assets/login.png";
import TextField from "../../components/atoms/TextField";
import { useTilt } from "../../hooks";

interface Props {}

const Login: FC<Props> = () => {
  const ref = useTilt<HTMLDivElement>();

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-500 via-yellow-400 to-green-400 flex items-center justify-center flex-wrap p-4">
      <div className="bg-white w-full max-w-screen-lg rounded-2xl overflow-hidden flex flex-wrap justify-between py-32 px-10 md:px-20">
        <div
          ref={ref}
          data-active={true}
          className="transition-transform duration-75 w-4/12 md:w-5/12 hidden md:block"
        >
          <img src={login} className="max-w-full" />
        </div>
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
      </div>
    </div>
  );
};

export default Login;
