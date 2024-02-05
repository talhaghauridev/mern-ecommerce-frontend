import * as Yup from "yup";

const updateProfileSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(4, "Name must be at least 4 characters")
    .max(25, "Name must not exceed 25 characters")
    .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces")
    .required("Name is Required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),

});

const updatePasswordSchema = Yup.object({
  oldPassword: Yup.string()
    .trim()
    .min(8, "Old Password must be at least 8 characters")
    .max(25, "Old Password must not exceed 25 characters")
    .required("Old Password is Required"),
  newPassword: Yup.string()
    .trim()
    .min(8, "New Password must be at least 8 characters")
    .max(25, "New Password must not exceed 25 characters")
    .required("New Password is Required"),
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .min(8, "Confirm Password must be at least 8 characters")
    .max(25, "Confirm Password must not exceed 25 characters")
    .required("Confirm Password is Required"),
});

export { updateProfileSchema, updatePasswordSchema };
