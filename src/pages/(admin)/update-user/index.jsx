import React from "react";
import { BackDrop, Button, Input, MetaData, Select } from "@components/ui";
import inputError from "@utils/inputError";
import { ROLES } from "@constants/index";
import AdminLoading from "../components/AdminLoading";
import { capitalize } from "@mui/material";
import useUpdateUser from "./hooks/useUpdateUser";
import { MdAlternateEmail, MdOutlineVerifiedUser } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
const UpdateProduct = () => {
  const { formik, updateLoading, detialLoading } = useUpdateUser();
  const { handleSubmit, getFieldProps } = formik;
  if (detialLoading) {
    return <AdminLoading />;
  }

  return (
    <>
      {updateLoading && <BackDrop isOpen={updateLoading} />}

      <MetaData title={"Update User - Admin"} />
      <section id="updateProduct">
        <div className="form_container pt-0 px-[0px] ">
          <form
            className="form "
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="form_heading">
              <h1>Update User</h1>
            </div>
              {/* Name Input  */}
              <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
              name="name"
              leftIcon={FaRegUser}
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
            {/* Select Roles  */}
            <Select
              {...getFieldProps("role")}
              error={inputError(formik, "role")}
              leftIcon={MdOutlineVerifiedUser}
            >
              <Select.Button>Select Role</Select.Button>
              {ROLES.map((role) => (
                <Select.Option key={role} value={role}>
                  {capitalize(String(role))}
                </Select.Option>
              ))}
            </Select>

            <Button type="submit" className="max-w-full mt-2">
              Update
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateProduct;
