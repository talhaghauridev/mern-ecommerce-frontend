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

  avatar: Yup.string().required("Avatar is required"),
});

export { updateProfileSchema };
