import * as Yup from "yup";

const createProductSchema = Yup.object({
   name: Yup.string().trim().required("Name is Required"),
   description: Yup.string().trim().required("Description is Required"),
   price: Yup.number().required("Price is Required").max(99999999, "Price cannot exceed 8 characters"),
   category: Yup.string().trim().required("Category is Required"),
   stock: Yup.number().required("Stock is Required").min(1, "Stock cannot be less than 1").max(9999, "Stock cannot exceed 4 characters").default(1)
});

const updateProductSchema = Yup.object({
   name: Yup.string().trim().required("Name is Required"),
   description: Yup.string().trim().required("Description is Required"),
   price: Yup.number().required("Price is Required").max(99999999, "Price cannot exceed 8 characters"),
   category: Yup.string().trim().required("Category is Required"),
   stock: Yup.number().required("Stock is Required").min(1, "Stock cannot be less than 1").max(9999, "Stock cannot exceed 4 characters").default(1)
});

const updateUserSchema = Yup.object({
   name: Yup.string().trim().required("Name is Required"),
   email: Yup.string().email("Invalid email format").required("Email is Required"),
   role: Yup.string().trim().required("Role is Required")
});

export { createProductSchema, updateProductSchema, updateUserSchema };
