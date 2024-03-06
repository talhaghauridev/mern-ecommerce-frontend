import React from "react";
import { Image } from "@components/ui";
import { Logo } from "@assets/images";
import { FOOTER } from "@constants";

const FooterList = ({ name, list }) => {
  return (
    <>
      <div>
        <div className="mb-4 font-bold uppercase tracking-widest text-gray-800 font-PoppinsBold">
          {name}
        </div>

        <ul className="flex flex-col md:gap-1 gap-[0.5rem]  font-Sans">
          {list.map((item, index) => (
            <div key={index}>
              <a
                href="#"
                className="text-gray-500 transition duration-100 text-[15px]"
              >
                {item}
              </a>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-white border-solid border-[1px] border-[#ededed]"
    >
      <div className="container pt-[50px] sm:pt-[70px] pb-[60px] md:pb-[0px]  ">
        <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
          <div className="col-span-full lg:col-span-2">
            <div className="mb-4 lg:-mt-2">
              <Image
                src={Logo}
                alt="Logo"
                className="w-[100px] h-[35px] max-w-[100%] max-h-[100%] sm:h-[40px] sm:w-[120px]  "
              />
            </div>

            <p className="mb-6 text-gray-500 sm:pr-8 font-Sans ">
              Filler text is dummy text which has no meaning however looks very
              similar to real text
            </p>

            <div className="flex gap-4">
              {FOOTER.Icons.map((Icon, index) => (
                <span
                  key={index}
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600 cursor-pointer"
                >
                  {<Icon size={"20px"} />}
                </span>
              ))}
            </div>
          </div>

          {FOOTER.Links.map((item, index) => (
            <FooterList {...item} key={index} />
          ))}
        </div>

        <div className="border-t py-[22px] text-center text-sm text-gray-400 font-Poppins">
          © {new Date().getFullYear()}  - Present cyber. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
