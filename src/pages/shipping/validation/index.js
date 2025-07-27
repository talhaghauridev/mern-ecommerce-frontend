import * as Yup from "yup";

const shippingSchema = Yup.object({
   address: Yup.string().trim().required("Address is Required"),

   city: Yup.string().trim().required("City is Required"),

   pinCode: Yup.number().min(8, "Pin Code must be at least 8 digits").required("Pin Code is Required"),

   phoneNumber: Yup.number().required("Phone Number is Required"),

   country: Yup.string().trim().required("Country is Required"),

   state: Yup.string().trim().required("State is Required")
});

export { shippingSchema };
