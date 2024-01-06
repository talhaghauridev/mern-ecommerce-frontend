import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title }) => {
  return (
    <>
      <Helmet>
        <head>{title}</head>
      </Helmet>
    </>
  );
};

export default Meta;
