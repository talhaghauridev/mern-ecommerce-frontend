import React, { useCallback } from "react";
import { useLogin, useSignUp } from "../hooks/hook";
import inputError from "../../../utils/inputError";
import { Button, Image, Input, InputUpload, Meta } from "../../../components";
import { useUpload } from "../../../hooks/hook";
import { useMemo } from "react";

const SignUp = () => {
  const { formik, isError, isLoading, data, error, isSuccess } = useSignUp();
  const { handleSubmit, getFieldProps } = formik;
  const { handleFileChange, image } = useUpload();
  console.log(
    { formik, error, isError, isLoading, isSuccess, data },
    error?.data?.message
  );
  console.log(image);

  return (
    <>
      <>
        <Meta title={"SignUp"} />
        <section id="signup">
          <div className="container">
            <form
              className="form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
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
              <InputUpload
                name={"avatar"}
                label={"Avatar"}
                onChange={(event) => {
                  handleFileChange(event);
                  formik.setFieldValue(
                    "avatar",
                    // URL.createObjectURL(event.target.files[0])?.replace(
                    //   "blob:",
                    //   ""
                    // )
                    image[0]
                  );
                  // handleFileChange(event);
                  console.log(
                    URL.createObjectURL(event.target.files[0]).replace(
                      "blob:",
                      ""
                    )
                  );
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
    </>
  );
};

export default SignUp;
