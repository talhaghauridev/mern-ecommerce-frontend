import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { saveShippingInfo } from "@redux/reducers/cartReducer";
import { shippingSchema } from "../validation";
import { SHIPPING_INFO } from "@constants/index";
import LocalStorage from "@utils/LocalStorage";

const getShippingInfo = () => {
  const info = LocalStorage.get(SHIPPING_INFO);
  if (info) {
    return info;
  }
};

const useShipping = () => {
  const initialValues = {
    address: "",
    city: "",
    pinCode: null,
    phoneNumber: null,
    state: "",
    country: "",
  };
  const dispatch = useDispatch();

  const handleSaveShippingInfo = (values) => {
    dispatch(saveShippingInfo(values));
  };

  const formik = useFormik({
    initialValues: getShippingInfo() ? getShippingInfo() : initialValues,
    validationSchema: shippingSchema,
    onSubmit: async (values) => {
      console.log(values);
      handleSaveShippingInfo(values);
    },
  });

  return {
    formik,
  };
};

export { useShipping };
