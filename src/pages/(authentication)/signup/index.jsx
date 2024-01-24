import React from "react";
import inputError from "@utils/inputError";
import {
  BackDrop,
  Button,
  Image,
  Input,
  InputUpload,
  MetaData,
} from "@components/ui";
import { useUpload } from "@hooks/hook";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const { formik, isLoading,originalArgs } = useSignup();
  const { handleSubmit, getFieldProps } = formik;
  const { handleFileChange, image } = useUpload();
  console.log(formik);
console.log(originalArgs);
console.log(formik?.values?.avatar);
  return (
    <>
      <BackDrop isOpen={isLoading} />

      <MetaData title={"SignUp"} />
      <section id="signup">
        <div className="container">
          <form
            className="form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
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
              {...getFieldProps("email")}
              error={inputError(formik, "email")}
            />

            {/* Input Password */}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              {...getFieldProps("password")}
              error={inputError(formik, "password")}
            />

            {/* Input InputUpload */}
            <InputUpload
              name={"avatar"}
              label={"Avatar"}
              {...getFieldProps("avatar")}
            />
            <Image src={URL.createObjectURL(formik?.values?.avatar)} alt="avatar" />
            <div>{inputError(formik, "avatar")}</div>

            <Button type="submit" className={"bg-slate-600"}>
              Submit
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
