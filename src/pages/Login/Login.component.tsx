import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Alert from "src/components/atoms/Alert";
import TextField from "src/components/atoms/TextField";
import { Props } from "./Login.container";

const Login: FC<Props> = ({ error, onLogin }) => {
  const { handleSubmit, register, errors } = useForm<LoginForm>();

  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit(onLogin)}>
      {error && <Alert>{error?.msg}</Alert>}
      <TextField
        label="Email or User Name"
        name="name_email"
        ref={register({ required: "User name or email is required" })}
        error={
          errors.name_email
            ? errors.name_email.message
            : error?.errors?.name_email
        }
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        ref={register({ required: "Password is required" })}
        error={
          errors.password ? errors.password.message : error?.errors?.password
        }
      />
      <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">
        Login
      </button>
      <Link to="/forgot_password" className="text-blue-400 text-center my-2">
        Forgot Password?
      </Link>
      <Link
        to="/register"
        className="w-full p-3 mt-8 mb-4 text-lg font-semibold text-center text-white bg-green-400 rounded-lg"
      >
        Create New Account
      </Link>
    </form>
  );
};

export default Login;
