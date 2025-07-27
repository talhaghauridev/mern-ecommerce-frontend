import React from "react";
import { Link } from "react-router-dom";
import { BackDrop, Button, Input, MetaData } from "@/components/ui";
import { MdAlternateEmail } from "react-icons/md";
import useForgotPassword from "../hooks/useForgotPassword";
import inputError from "@/utils/inputError";

const ForgotPassword = () => {
  const { formik, isLoading } = useForgotPassword();
  const { getFieldProps, handleSubmit } = formik;
  return (
    <>
      {isLoading && <BackDrop isOpen={isLoading} />}
      <MetaData title="Forgot Password" />
      <section id="forgotPassword">
        <div className="form_container">
          <form onSubmit={handleSubmit} className="form">
            <div className="form_heading">
              <h1>Forgot Password</h1>
            </div>
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              name="email"
              leftIcon={MdAlternateEmail}
              error={inputError(formik, "email")}
              {...getFieldProps("email")}
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
          </form>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
