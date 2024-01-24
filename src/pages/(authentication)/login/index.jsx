import React from "react";
import { Input, Button, MetaData, BackDrop, buttonVariants } from "@components/ui";
import inputError from "@utils/inputError";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";
import cn from "@utils/cn";
const Login = () => {
  const { formik, isLoading } = useLogin();
  const { handleSubmit, getFieldProps } = formik;
  

  return (
    <>
      <BackDrop isOpen={isLoading} />
      <MetaData title={"Login"} />
      <section id="login">
        <div className="container">
          <div className="form_heading">
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit} className="form">
            {/* Email Input  */}
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              name="email"
              {...getFieldProps("email")}
              error={inputError(formik, "email")}
            />

            {/* Password Input  */}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              {...getFieldProps("password")}
              error={inputError(formik, "password")}
            />

            <Button className={"bg-slate-500"} type="submit">
              Submit
            </Button>
            
            <Link to={"/password/reset"} className={cn(buttonVariants({variants:"outline"}))}>
              Reset
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
