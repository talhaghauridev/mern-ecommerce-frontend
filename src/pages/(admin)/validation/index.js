import * as Yup from "yup";

const createProductSchema = Yup.object({
  name: Yup.string().trim().required("Name is Required"),
  descripton: Yup.string().trim().required("Description is Required"),
  price: Yup.number()
    .required("Price is Required")
    .max(99999999, "Price cannot exceed 8 characters"),
  category: Yup.string().trim().required("Category is Required"),
  stock: Yup.number()
    .required("Stock is Required")
    .min(1, "Stock cannot be less than 1")
    .max(9999, "Stock cannot exceed 4 characters")
    .default(1),
});

export { createProductSchema };
