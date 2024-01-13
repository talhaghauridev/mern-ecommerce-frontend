import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{`${title} -- Ecommerce`}</title>
      </Helmet>
    </>
  );
};

export default Meta;
