import React from "react";
import { STEPPER_STEPS } from "@constants/index";
import cn from "@utils/cn";

const Stepper = ({ activeStep }) => {
  return (
    <div id="stepper" key={activeStep} className="mt-[50px] md:mb-[-30px]">
      <div className="stepper_container container font-SansBold items-center justify-center max-w-[785px] mx-auto flex gap-[10px] md:gap-[15px] md:p-[15px] text-[#2b3445]">
        {STEPPER_STEPS?.map((step, index) => {
          const { icon: Icon, label } = step;
          console.log(activeStep === index);
          console.log(activeStep, index);
          return (
            <>
              <div
                className={cn(
                  " step w-full max-w-fit flex items-center justify-center gap-[6px]",
                  activeStep === index && "text-[#D23F57!important]"
                )}
                key={index}
              >
                <Icon className="text-[26px] sm:text-[30px]" />
                <h1
                  className={cn(
                    "hidden sm:flex items-center justify-center gap-[6px] w-full text-gray-600 ",
                    activeStep >= index && "text-[#D23F57]"
                  )}
                >
                  {step.label}
                  {/* {activeStep >= index && (
                    <p className="text-center md:text-xs md:max-w-min-content">
                    </p>
                  )} */}
                </h1>
              </div>
              <div
                className={cn(
                  "w-full flex items-center justify-center ",
                  activeStep === index ? "bg-[#d23f57]" : ""
                )}
                style={{ display: index === 2 ? "none" : "" }}
              >
                <span
                  className="h-[1.5px] w-full bg-gray-400 rounded-[5px]"
                  style={{
                    backgroundColor: activeStep >= index ? "#d23f57" : "",
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
