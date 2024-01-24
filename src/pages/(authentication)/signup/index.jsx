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
  const { formik, isLoading } = useSignup();
  const { handleSubmit, getFieldProps } = formik;
  const { handleFileChange, image } = useUpload();
  console.log(formik);

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
              onChange={(event) => {
                handleFileChange(event);
               image && formik.setFieldValue("avatar", image && image[0]);
              }}
            />
            <Image src={image} alt="avatar" />
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
