import React from "react";
import { STEPPER_STEPS } from "@constants/index";

const Stepper = (activeStep = 1) => {
  return (
    <div id="stepper" key={activeStep} className="mt-[30px]" >
      <div className="stepper_container container font-SansBold items-center justify-center max-w-[900px] mx-auto flex gap-[20px] px-[40px] md:gap-0 md:p-[15px]">
        {STEPPER_STEPS?.map((step, index) => {
          const { icon: Icon, label } = step;
          return (
            <>
              <div
                className={` step w-full max-w-fit flex items-center justify-center gap-[6px] ${
                  activeStep === index ? "stepActive" : ""
                }`}
                key={index}
              >
                <Icon className="text-[22px]" />
                <h1
                  className={`flex items-center justify-center gap-[6px] ${
                    activeStep >= index ? "text-rose-500" : "text-gray-600"
                  }`}
                >
                  {step.label}
                  {activeStep >= index && (
                    <p className="text-center md:text-xs md:max-w-min-content">
                      {/* Add your content for active step */}
                    </p>
                  )}
                </h1>
              </div>
              <div
                className={`w-full flex items-center justify-center ${
                  activeStep === index ? "bg-[#d23f57]" : ""
                }`}
                style={{ display: index === 2 ? "none" : "" }}
              >
                <span
                  className="h-[1.5px] w-full bg-gray-400 rounded-[5px]"
                  style={{
                    backgroundColor:
                      activeStep >= index ? "#d23f57" : "",
                  }}
                ></span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
