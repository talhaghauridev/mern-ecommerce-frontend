import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { NAV } from "@/constants";
import cn from "@/utils/cn";

const BottomNavigation = ({ setSearchModel }) => {
  return (
    <>
      <div
        className="bg-white  flex md:hidden fixed bottom-0 w-full z-[1] "
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 4px 3px" }}
      >
        <ul className="flex gap-[34px] font-PoppinsBold items-center justify-evenly py-[6px] sm:py-[8px] px-[15px] w-[100%]">
          {NAV.Links.map((item, index) => (
            <LinkItem {...item} key={index} />
          ))}
          <Link to="/cart" className="hidden sm:flex">
            <li className="flex flex-col gap-[5px] items-center justify-center text-[#2b3445] text-[13px] sm:text-[14px] cursor-pointer hover:text-[#d23f57] transition-colors">
              <p className="text-[22px] md:text-[22px]">
                <BsCart3 />
              </p>
              Cart
            </li>
          </Link>

          <li
            className="flex flex-col gap-[5px] items-center justify-center text-[#2b3445] text-[13px] sm:text-[14px] cursor-pointer hover:text-[#d23f57] transition-colors"
            onClick={() => {
              setSearchModel(true);
              document.body.style.overflow = "hidden";
            }}
          >
            <p className="text-[22px] md:text-[22px]">
              <IoMdSearch />
            </p>
            Search
          </li>
        </ul>
      </div>
    </>
  );
};

const LinkItem = memo((item) => {
  const { pathname } = useLocation();

  return (
    <Link to={item.path}>
      <li
        className={cn(
          `flex flex-col gap-[2px] items-center justify-center  text-[13px] sm:text-[14px] hover:text-[#d23f57] transition-colors `,
          pathname === item.path ? "text-[#d23f57]" : "text-[#2b3445]"
        )}
      >
        <p className="text-[21px] md:text-[22px]">{item.icon}</p>
        {item.name}
      </li>
    </Link>
  );
});
export default memo(BottomNavigation);
