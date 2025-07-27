import { memo } from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
   return (
      <Helmet>
         <title>{`${title} | Cyber Ecommerce`}</title>
      </Helmet>
   );
};

export default memo(MetaData);
