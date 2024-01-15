import React from "react";
import { memo } from "react";
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

export default memo(Meta);
