import React from "react";
import { useForm } from "react-hook-form";
type AuthForm = {
  email: string;
  password: string;
  isRemembered: boolean;
};
const Auth = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthForm>({ mode: "onSubmit" });
  return (
    <section>
      <h2>My account</h2>
      <form>
        <input type="email" placeholder="Email" 
        {...register("email", {
            required: "This field is required ",
          })}
        />
        <input type="password" placeholder="Password" 
        {...register("password", {
            required: "This field is required ",
          })}
        />
        <div className="">
          <input type="checkbox" name="" id="" /> <span>Remember me</span>
        </div>

        <button>Sign in</button>
        <a href="">Have you forgotten your password?</a>
      </form>
    </section>
  );
};

export default Auth;
