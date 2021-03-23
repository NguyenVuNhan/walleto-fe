import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Alert from "src/components/atoms/Alert";
import TextField from "src/components/atoms/TextField";
import { Props } from "./Register.container";

const Register: FC<Props> = ({ error, onRegister }) => {
  const { handleSubmit, register, errors, watch } = useForm<RegisterForm>();

  return (
    <form
      className="w-full flex flex-col gap-2"
      onSubmit={handleSubmit(onRegister)}
    >
      {error && <Alert>{error.msg}</Alert>}
      <TextField
        label="User Name"
        name="name"
        ref={register({ required: "User name is required" })}
        error={errors.name ? errors.name.message : error?.errors?.name}
      />
      <TextField
        label="Email"
        name="email"
        ref={register({ required: "Email is required" })}
        error={errors.email ? errors.email.message : error?.errors?.email}
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
      <TextField
        label="Confirm Password"
        type="password"
        name="cpassword"
        ref={register({
          required: "Confirm Password is required",
          validate: (value) =>
            value === watch("password") || "The passwords do not match",
        })}
        error={
          errors.cpassword ? errors.cpassword.message : error?.errors?.cpassword
        }
      />
      <button className="w-full p-3 text-lg font-semibold text-white bg-blue-500 rounded-lg">
        Register
      </button>
      <Link to="/forgot_password" className="my-2 text-center text-blue-400">
        Forgot Password?
      </Link>
      <Link
        to="/login"
        className="w-full p-3 mt-8 mb-4 text-lg font-semibold text-center text-white bg-green-400 rounded-lg"
      >
        Login To Your Account
      </Link>
    </form>
  );
};

export default Register;
