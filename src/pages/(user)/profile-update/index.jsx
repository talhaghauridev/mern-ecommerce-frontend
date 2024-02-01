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
import { avatar } from "@assets/images";
import { MdAlternateEmail } from "react-icons/md";
import useUpdateProfile from "../hooks/useUpdateProfile";
const UpdateProfile = () => {
  const { formik, isLoading } = useUpdateProfile();
  const { handleSubmit, getFieldProps } = formik;
  const { handleFileChange, image } = useUpload();
  console.log(formik, image);
  return (
    <>
      {isLoading && <BackDrop isOpen={isLoading} />}

      <MetaData title={"UpdateProfile"} />
      <section id="updateProfile">
        <div className="form_container pt-0 px-[0px]">
          <form
            className="form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="form_heading">
              <h1>Update Profile</h1>
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

            {/* Input InputUpload */}
            <div className="upload_input">
              <Image className="upload_avatar" src={avatar} alt="avatar" />
              <InputUpload
                name={"avatar"}
                label={"Upload Avatar"}
                onChange={(event) => {
                  handleFileChange(event);
                  image && formik.setFieldValue("avatar", image && image[0]);
                }}
              />

              <div>{inputError(formik, "avatar")}</div>
            </div>
            <Button type="submit" className="max-w-full mt-2">
              Update
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateProfile;
