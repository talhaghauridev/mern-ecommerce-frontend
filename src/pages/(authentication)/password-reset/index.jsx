import React from "react";
import { BackDrop, Button, Input, MetaData } from "@components/ui";
import inputError from "@utils/inputError";
import useResetPassword from "../hooks/useResetPassword";

const ResetPassword = () => {
  const { formik, isLoading } = useResetPassword();
  const { getFieldProps, handleSubmit } = formik;

  return (
    <>
      {isLoading && <BackDrop isOpen={isLoading} />}
      <MetaData title={"Confirm Password"} />
      <section id="forgotPassword">
        <div className="form_container">
          <form onSubmit={handleSubmit} className="form">
            {/* Input Password */}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="email"
              error={inputError(formik, "password")}
              {...getFieldProps("password")}
            />
            {/* Input Confirm Password */}
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Enter your confirmPassword"
              name="email"
              error={inputError(formik, "confirmPassword")}
              {...getFieldProps("confirmPassword")}
            />
            <Button type="submit" className="max-w-full mt-2">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
