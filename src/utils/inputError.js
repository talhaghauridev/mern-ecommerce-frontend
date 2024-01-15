const inputError = (formik, name) => {
  console.log("Error");
  return formik && formik.touched[name] && formik.errors[name]
    ? formik.errors[name]
    : "";
};

export { inputError };
