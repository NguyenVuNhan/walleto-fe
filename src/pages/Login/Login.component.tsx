import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TextField from "src/components/atoms/TextField";

interface Props {
  onLogin(data: LoginForm): void;
}

const Login: FC<Props> = ({ onLogin }) => {
  const { handleSubmit, register } = useForm<LoginForm>();

  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit(onLogin)}>
      <TextField label="Email or User Name" name="name_email" ref={register} />
      <TextField
        label="Password"
        type="password"
        name="password"
        ref={register}
      />
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
