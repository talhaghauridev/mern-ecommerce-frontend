import React from "react";
import ConfirmOrderBox from "./components/ConfirmPriceBox";
import Stepper from "@components/Stepper";

const ConfirmOrder = () => {
  return (
    <section id="confirmOrder">
      <div className="container">
        <Stepper activeStep={1} />
        <ConfirmOrderBox />
      </div>
    </section>
  );
};

export default ConfirmOrder;
