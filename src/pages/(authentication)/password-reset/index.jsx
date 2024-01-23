import React from "react";
import { BackDrop, Button, Input, MetaData } from "@components/ui";
import inputError from "@utils/inputError";
import useResetPassword from "../hooks/useResetPassword";

const ResetPassword = () => {
  const { formik, isLoading } = useResetPassword();
  const { getFieldProps, handleSubmit } = formik;

  return (
    <>
      <MetaData title={"Confirm Password"} />
      <BackDrop isOpen={isLoading} />
      <section id="confirm_password">
        <section id="forgotPassword">
          <div className="container">
            <form onSubmit={handleSubmit}>
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
              <Button
                type="submit"
                onSubmit={handleSubmit}
                className={"bg-slate-600"}
              >
                Submit
              </Button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default ResetPassword;
