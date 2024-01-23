import React from "react";
import inputError from "@utils/inputError";
import { BackDrop, Button, Input, MetaData } from "@components/ui";
import useForgotPassword from "../hooks/useForgotPassword";

const ForgotPassword = () => {
  const { formik, isLoading, isError, isSuccess, data } = useForgotPassword();
  const { getFieldProps, handleSubmit } = formik;
  console.log({ isLoading, isError, isSuccess, data });
  return (
    <>
      <BackDrop isOpen={isLoading} />

      <MetaData title="Forgot Password" />
      <section id="forgotPassword">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              name="email"
              error={inputError(formik, "email")}
              {...getFieldProps("email")}
            />

            <Button type="submit" className={"bg-slate-600"}>
              Submit
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
