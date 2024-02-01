import React, { useMemo } from "react";
import cn from "@utils/cn";
import { USER_PROFILE_LINK } from "@constants/index";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { avatar } from "@assets/images";
import { Image } from "@components/ui";
import { TbLogout } from "react-icons/tb";

const UserSidebar = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { pathname } = useLocation();

  return (
    <aside
      id="profileSidebar"
      className={cn(
        "md:h-min bg-white w-full max-w-[240px] md:flex flex-col items-center justify-start md:static fixed top-[0px] left-0 h-[100vh] md:overflow-hidden overflow-y-auto overflow-x-hidden z-10 md:z-[0] transition-all"
      )}
      style={{
        boxShadow: "0 0 4px 3px #ededed",
      }}
    >
      <div className="sidebar w-full h-full py-[10px] border-t border-solid border-[#d7d6d6b5] ">
        <div className="sidebar_heading border-b border-solid border-[#d7d6d6b5] py-[10px] px-[15px] flex items-center justify-between gap-[6px]">
          <Image
            src={userInfo?.avatar?.url}
            alt={userInfo?.name}
            className="w-[100%] h-[100%] max-w-[36px]  rounded-full "
          />
          <div>
            <h1 className="text-[#2b3445] font-semibold font-Poppins text-[18px] mb-[-6px]">
              {userInfo?.name}
            </h1>
            <span className="text-[14px] font-Sans font-[400]">
              {userInfo?.email}
            </span>
          </div>
        </div>

        <ul className="py-[40px] flex flex-col ">
          {USER_PROFILE_LINK.map(({ path, name, icon: Icon }) => (
            <Link
              to={path}
              className="items-center justify-start flex gap-[6px]"
            >
              <li
                className={cn(
                  "cursor-pointer sm:text-[15px] text-[14px] text-[#2b3445] font-Sans w-[170px] sm:w-[100%] md:w-[100%] py-[12px] px-[16px] border-solid border-b border-[#e5e7eb] flex items-center justify-start gap-[5px] transition-all hover:bg-[#2b34450f]  ",
                  name === "Profile" && "border-t",
                  pathname === path && "bg-[#2b34450f]"
                )}
              >
                <Icon />
                <h1 className="text-[15px]">{name}</h1>
              </li>
            </Link>
          ))}
          <div className="cursor-pointer sm:text-[15px] text-[14px] text-[#2b3445] font-Sans w-[170px] sm:w-[100%] md:w-[100%] py-[12px] px-[16px] border-solid border-b border-[#e5e7eb] flex items-center justify-start gap-[5px] transition-all hover:bg-[#2b34450f]  ">
            <TbLogout className="text-[15px] md:text-[18px]" />
            <h1 className="text-[15px]">Logout</h1>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default UserSidebar;
