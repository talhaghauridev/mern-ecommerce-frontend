import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { saveShippingInfo } from "@redux/reducers/cartReducer";
import { SHIPPING_INFO } from "@constants/index";
import LocalStorage from "@utils/LocalStorage";
import { shippingSchema } from "../validation";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const getShippingInfo = () => {
  const info = LocalStorage.get(SHIPPING_INFO);
  if (info) {
    return info;
  }
};

const useShipping = () => {
  const navigate = useNavigate();

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

  const onSubmit = useCallback(
    (values) => {
      handleSaveShippingInfo(values);
      navigate("/order/confirm");
    },
    [handleSaveShippingInfo, navigate]
  );

  const formik = useFormik({
    initialValues: getShippingInfo() ? getShippingInfo() : initialValues,
    validationSchema: shippingSchema,
    onSubmit: onSubmit,
  });

  return {
    formik,
  };
};

export { useShipping };
