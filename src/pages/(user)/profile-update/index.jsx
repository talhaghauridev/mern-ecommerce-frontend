import React from "react";
import {
  BackDrop,
  Button,
  Image,
  Input,
  InputUpload,
  MetaData,
} from "@components/ui";
import { MdAlternateEmail } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import inputError from "@utils/inputError";
import useUpdateProfile from "../hooks/useUpdateProfile";
const UpdateProfile = () => {
  const { formik, isLoading, handleFileChange, avatar } = useUpdateProfile();
  const { handleSubmit, getFieldProps } = formik;

  return (
    <>
      {isLoading && <BackDrop isOpen={isLoading} />}

      <MetaData title={"Update Profile"} />
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
              leftIcon={RxAvatar}
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
                onChange={handleFileChange}
              />

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
