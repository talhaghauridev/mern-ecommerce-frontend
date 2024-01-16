import React, { useState } from "react";
import { Meta, Input } from "../../../components";
import { useLogin, useMessage } from "../hooks/hook";
import { useCallback } from "react";
import { useInputError } from "../../../hooks/hook";
const Login = () => {
  const { formik } = useLogin();
  const { handleSubmit, getFieldProps } = formik;
  const [dum, setDum] = useState(false);
  // console.log("Login Component");
  const callBackSum = useCallback(() => setDum((prev) => !prev), []);

  return (
    <>
      <button onClick={callBackSum}>{dum ? "Hello" : "Bye"}</button>
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
              error={useInputError(formik, "email")}
            />

            {/* Password Input  */}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              {...getFieldProps("password")}
              error={useInputError(formik, "password")}
            />

            <Input
              label="Password"
              type="name"
              placeholder="Enter your password"
              name="password"
            />
            <button>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
