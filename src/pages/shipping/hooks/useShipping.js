import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { saveShippingInfo } from "@redux/reducers/cartReducer";
import { SHIPPING_INFO } from "@constants/index";
import LocalStorage from "@utils/LocalStorage";
import { shippingSchema } from "../validation";
import { useCallback } from "react";

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

  const handleSaveShippingInfo = useCallback(
    (values) => {
      dispatch(saveShippingInfo(values));
    },
    [dispatch]
  );

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
