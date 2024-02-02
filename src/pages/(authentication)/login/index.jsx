import React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Button,
  MetaData,
  BackDrop,
} from "@components/ui";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import useLogin from "../hooks/useLogin";
import inputError from "@utils/inputError";
const Login = () => {
  const { formik, isLoading } = useLogin();
  const { handleSubmit, getFieldProps } = formik;

  return (
    <>
      {isLoading && <BackDrop isOpen={isLoading} />}

      <MetaData title={"Login"} />
      <section id="login">
        <div className="form_container">
          <form onSubmit={handleSubmit} className="form">
            <div className="form_heading">
              <h1>Login</h1>
            </div>
            {/* Email Input  */}
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              name="email"
              leftIcon={MdAlternateEmail}
              {...getFieldProps("email")}
              error={inputError(formik, "email")}
            />

            {/* Password Input  */}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              leftIcon={RiLockPasswordLine}
              {...getFieldProps("password")}
              error={inputError(formik, "password")}
            />

            <Button type="submit" className="max-w-full mt-2">
              Submit
            </Button>
            <Button
              className="max-w-full font-Sans gap-1 mt-1 border-0"
              variants={"outline"}
            >
              Don't have account?
              <Link to="/signup" className="underline">
                Sign Up
              </Link>
            </Button>
            <Button className="max-w-full font-Poppins gap-1" variants="danger">
              Forgot your password?
              <Link to={"/password/forgot"} className="underline">
              Forgot it
              </Link>
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
