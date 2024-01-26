import React from "react";
import { Image } from "@components/ui";
import { Logo } from "@assets/images";
import { FOOTER } from "@constants";

const FooterList = ({ name, list }) => {
  return (
    <>
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">
          {name}
        </div>

        <ul class="flex flex-col gap-4">
          {list.map((item, index) => (
            <div key={index}>
              <a
                href="#"
                class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
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
      class="bg-white border-solid border-[1px] border-[#ededed]"
    >
      <div class="pt-12 lg:pt-16">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
            <div class="col-span-full lg:col-span-2">
              <div class="mb-4 lg:-mt-2">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="w-[100px] sm:w-[120px] max-w-[400px]   "
                />
              </div>

              <p class="mb-6 text-gray-500 sm:pr-8">
                Filler text is dummy text which has no meaning however looks
                very similar to real text
              </p>

              <div class="flex gap-4">
                {FOOTER.Icons.map((Icon, index) => (
                  <span key={index} className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600 cursor-pointer">
                    {<Icon size={"20px"} />}
                  </span>
                ))}
              </div>
            </div>

            {FOOTER.Links.map((item, index) => (
              <FooterList {...item} key={index} />
            ))}
          </div>

          <div class="border-t py-[22px] text-center text-sm text-gray-400">
            © 2024 - Present cyber. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
