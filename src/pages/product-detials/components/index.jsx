import { AnimationWrapper, Image } from "@components/ui";
import React, { useState } from "react";
const productImages = [
  "https://images.unsplash.com/flagged/photo-1571366992791-2ad2078656cb?auto=format&q=75&fit=crop&w=250",
  "https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250",
  "https://images.unsplash.com/flagged/photo-1571366992999-47669b775ef6?auto=format&q=75&fit=crop&w=250",
  "https://images.unsplash.com/flagged/photo-1571366992942-be878c7b10c0?auto=format&q=75&fit=crop&w=600",
];

const ProductDetials = () => {
  const [images, setImages] = useState(productImages[0]);
  return (
    <>
      <section className="bg-white ">
        <div className="mx-auto max-w-[1250px] px-[15px] py-[40px] md:py-[60px]">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="grid gap-4 lg:grid-cols-5">
              <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {productImages.map((e) => (
                  <>
                    <div
                      className="overflow-hidden h-[100%] md:h-[100px] rounded-lg"
                      onClick={() => setImages(e)}
                      onMouseEnter={() => setImages(e)}
                    >
                      <Image
                        src={e}
                        alt="Photo by Himanshu Dewangan"
                        className={`h-[100%]   w-[300px] object-cover object-center max-w-[100%] max-h-[200px] md:max-h-[100%] transition-all border-[1px] border-white ${
                          e === images ? "border-solid" : ""
                        }  `}
                        style={{
                          filter:
                            e === images ? "brightness(0.80)" : "brightness(1)",
                        }}
                      />
                    </div>
                  </>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-lg  lg:col-span-4">
                <AnimationWrapper
                  initial={{ opacity: 0.4 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-[100%!important] w-[100%] h-[100%] flex items-start justify-center md:justify-start"
                  key={images}
                >
                  <img
                    src={images}
                    alt="Photo by Himanshu Dewangan"
                    className="h-full w-full max-w-[420px] object-cover object-center rounded-[5px]"
                  />
                </AnimationWrapper>
              </div>
            </div>

            <div className=" flex flex-col gap-[10px] mt-[20px] ">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                  Fancy Brand
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  Pullover with pattern
                </h2>
              </div>

              <div className="mb-6 flex items-center md:mb-5">
                <div className="-ml-1 flex gap-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <span className="ml-2 text-sm text-gray-500">4.2</span>
              </div>

              <div>
                <div className="mb-3 text-lg font-semibold text-gray-800">
                  Description
                </div>

                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text but is random or otherwise generated. It may be
                  used to display a sample of fonts or generate text for
                  testing.
                </p>
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    $15.00
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    $30.00
                  </span>
                </div>
              </div>

              <div className="flex gap-2.5">
                <a
                  href="#"
                  className="inline-block flex-1 rounded-lg bg-[#E3364E] px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-[#E3364E] focus-visible:ring  sm:flex-none md:text-base font-Sans"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          {/* Comments */}
          <div className="py-[40px] md:py-[60px]">
            <div className=" flex items-center justify-between border-b py-5 max-w-[1000px]">
              <h2 className=" text-center text-2xl font-bold text-gray-800  lg:text-3xl ">
                Customer Reviews
              </h2>

              <a
                href="#"
                className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
              >
                Write a review
              </a>
            </div>

            {/* Comments Grid */}
            <div className="flex flex-col"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetials;
