import React, { useState } from "react";
import { Input, Meta } from "../../../components";
import { useLogin, useMessage } from "../hooks/hook";
import { inputError } from "../../../utils/inputError";

const Login = () => {
  const { formik } = useLogin();
  const { handleSubmit, getFieldProps } = formik;

  return (
    <>
      <Meta title={"Login"} />
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
