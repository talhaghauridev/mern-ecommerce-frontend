import React from "react";
import { Button } from "../../components";

export const Hero = () => {
  return (
    <section id="hero">
      <div className="bg-gradient1  flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] md:px-10 px-40 sm:px-5 w-full">
        <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div
              className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700_7e w-full"
            >
              Pro.Beyond.
            </div>
            <div
              className="md:text-5xl text-8xl text-white-A700 tracking-[-0.96px] w-full"
            >
              <span className="text-white-A700 font-sfprodisplay text-left font-thin">
                IPhone 14{" "}
              </span>
              <span className="text-white-A700 font-sfprodisplay text-left font-semibold">
                Pro
              </span>
            </div>
          </div>
          <div
            className="text-gray-500 text-lg w-full"
            size="txtSFProDisplayMedium18"
          >
            Created to change everything for the better. For everyone
          </div>
          <Button
            className="cursor-pointer font-medium min-w-[184px] text-base text-center"
        
            variant="outline"
          >
            Shop Now
          </Button>
        </div>
        <div className="flex md:flex-1 flex-col items-center justify-end pt-[73px] w-[37%] md:w-full">
         
        </div>
      </div>
    </section>
  );
};

export default Hero;