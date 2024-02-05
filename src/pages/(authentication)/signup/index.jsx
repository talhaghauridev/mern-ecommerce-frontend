import React from "react";
import { Link } from "react-router-dom";
import {
  BackDrop,
  Button,
  Image,
  Input,
  InputUpload,
  MetaData,
} from "@components/ui";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import useSignup from "../hooks/useSignup";
import inputError from "@utils/inputError";
const SignUp = () => {
  const { formik, isLoading, handleFileChange, avatar } = useSignup();
  const { handleSubmit, getFieldProps } = formik;
  return (
    <>
      {isLoading && <BackDrop isOpen={isLoading} />}

      <MetaData title={"SignUp"} />
      <section id="signup">
        <div className="form_container">
          <form
            className="form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="form_heading">
              <h1>SignUp</h1>
            </div>
            {/* Name Input  */}
            <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
              name="name"
              {...getFieldProps("name")}
              error={inputError(formik, "name")}
            />

            {/* Input Email */}
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              name="email"
              leftIcon={MdAlternateEmail}
              {...getFieldProps("email")}
              error={inputError(formik, "email")}
            />

            {/* Input Password */}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              leftIcon={RiLockPasswordLine}
              {...getFieldProps("password")}
              error={inputError(formik, "password")}
            />

            {/* Input InputUpload */}
            <div className="upload_input">
              <Image className="upload_avatar" src={avatar} alt="avatar" />
              <InputUpload
                name={"avatar"}
                label={"Upload Avatar"}
                onChange={handleFileChange}
              />
            </div>
            <Button type="submit" className="max-w-full mt-2">
              Submit
            </Button>

            <Button
              className="max-w-full font-Sans gap-1 mt-1 border-0"
              variants={"outline"}
            >
              Already have an account?
              <Link to="/login" className="underline">
                Login
              </Link>
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
