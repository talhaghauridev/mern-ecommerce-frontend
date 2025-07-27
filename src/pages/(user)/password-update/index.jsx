import React from "react";
import { BackDrop, Button, Input, MetaData } from "@/components/ui";
import { RiBankFill, RiLockPasswordLine } from "react-icons/ri";
import useUpdatePassword from "../hooks/useUpdatePassword";
import inputError from "@/utils/inputError";
const updatePassword = () => {
   const { formik, isLoading } = useUpdatePassword();
   const { handleSubmit, getFieldProps } = formik;
   return (
      <>
         {isLoading && <BackDrop isOpen={isLoading} />}
         <MetaData title={"Update Password"} />
         <section id="Update Password">
            <div className="form_container pt-0 px-[0px]">
               <form
                  className="form"
                  onSubmit={handleSubmit}>
                  <div className="form_heading">
                     <h1>Update Password</h1>
                  </div>
                  {/* Old Password Input  */}
                  <Input
                     label="Old Password"
                     type="password"
                     placeholder="Enter your old password"
                     name="email"
                     leftIcon={RiLockPasswordLine}
                     error={inputError(formik, "oldPassword")}
                     {...getFieldProps("oldPassword")}
                  />

                  {/* New Password Input  */}
                  <Input
                     label="New Password"
                     type="password"
                     placeholder="Enter your old new password"
                     name="email"
                     leftIcon={RiLockPasswordLine}
                     error={inputError(formik, "newPassword")}
                     {...getFieldProps("newPassword")}
                  />

                  {/* Input Confirm Password */}
                  <Input
                     label="Confirm Password"
                     type="password"
                     placeholder="Enter your confirmPassword"
                     name="email"
                     leftIcon={RiLockPasswordLine}
                     error={inputError(formik, "confirmPassword")}
                     {...getFieldProps("confirmPassword")}
                  />
                  <Button
                     type="submit"
                     className="max-w-full mt-2">
                     Submit
                  </Button>
               </form>
            </div>
         </section>
      </>
   );
};

export default updatePassword;
