import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TextField from "src/components/atoms/TextField";

interface Props {
  onRegister(data: RegisterForm): void;
}

const Register: FC<Props> = ({ onRegister }) => {
  const { handleSubmit, register, errors, watch } = useForm<RegisterForm>();

  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit(onRegister)}>
      <TextField label="User Name" name="name" ref={register} />
      <TextField label="Email" name="email" ref={register} />
      <TextField
        label="Password"
        type="password"
        name="password"
        ref={register}
      />
      <TextField
        label="Confirm Password"
        type="password"
        name="cpassword"
        ref={register}
      />
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
