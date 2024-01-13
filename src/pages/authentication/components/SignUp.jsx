import React from "react";
import { useLogin, useSignUp } from "../hooks/hook";
import { inputError } from "../../../utils/inputError";
import { Meta } from "../../../components";

const SignUp = () => {
  const { formik } = useSignUp();
  const { handleSubmit, getFieldProps } = formik;
  return (
    <>
      <>
        <Meta title={"SignUp"} />
        <section id="signup">
          <div className="container">
            <form className="form" onSubmit={handleSubmit}>
              <Input
                label="Name"
                type="text"
                placeholder="Enter your name"
                name="name"
                {...getFieldProps("name")}
                error={inputError(formik, "name")}
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                name="email"
                {...getFieldProps("email")}
                error={inputError(formik, "email")}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                name="password"
                {...getFieldProps("password")}
                error={inputError(formik, "password")}
              />
            </form>
          </div>
        </section>
      </>
    </>
  );
};

export default SignUp;
