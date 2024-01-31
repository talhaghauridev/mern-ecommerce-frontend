import React from "react";
import { STEPPER_STEPS } from "@constants/index";

const Stepper = (activeStep=1) => {
  return (
    <div id="stepper" key={activeStep} className="relative">
      <div className="max-w-1000 mx-auto flex gap-20 px-[15px] stepper_container md:gap-0">
        {STEPPER_STEPS?.map((step, index) => {
          const { icon: Icon, label } = step;
          return (
            <>
              <div
                className={`flex items-center justify-start w-full max-w-[fit-content] step ${
                  activeStep === index ? "stepActive" : ""
                }`}
                key={index}
              >
                <h1
                  className={`flex items-center justify-center gap-[5px] color-${
                    activeStep >= index ? "#d23f57" : "00000099"
                  } md:flex-col`}
                >
                  <Icon />

                  <h1>{step.label}</h1>
                  <p
                    className={`text-center md:text-xs ${
                      activeStep >= index
                        ? "text-[11px] max-w-[min-content]"
                        : ""
                    }`}
                  >
                    {/* {step.description} */}
                  </p>
                </h1>
              </div>
              <div
                className={`flex items-center justify-center w-full step_line ${
                  activeStep === index ? "stepLineActive" : ""
                }`}
                style={{ display: index === 2 ? "none" : "" }}
              >
                <span
                  className={`h-[1.5px] w-full bg-${
                    activeStep >= index ? "#d23f57" : "0000004f"
                  } flex rounded-[5px]`}
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
