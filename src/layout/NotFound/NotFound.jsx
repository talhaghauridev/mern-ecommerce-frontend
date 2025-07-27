import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui";
import { Logo } from "@/assets/images";

const NotFound = () => {
  return (
    <section id="not-found" className="h-[100vh] w-full">
      <div className="container flex flex-col items-center justify-center gap-[15px]">
        <Image src={Logo} alt="Logo" className="w-full max-w-[150px] mb-1" />
        {/* <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">
              That’s a 404
            </p> */}
        <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
          Page not found
        </h1>

        <p className="mb-[10px] max-w-screen-md text-center text-gray-500 md:text-lg">
          The page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
        >
          Go home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
