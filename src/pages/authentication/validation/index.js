import * as Yup from "yup";

const signUpSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(4, "Name must be at least 4 characters")
    .max(25, "Name must not exceed 25 characters")
    .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces")
    .required("Name is Required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),

  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .max(25, "Password must not exceed 25 characters")
    .required("Password is Required"),
  avatar: Yup.mixed().required("Avatar is required"),
});

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),

  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .max(25, "Password must not exceed 25 characters")
    .required("Password is Required"),
});

const forgotSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
});
export { signUpSchema, loginSchema,forgotSchema };
