import React, { memo, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { BackDrop, Button } from "@components/ui";
import { FaBarsStaggered } from "react-icons/fa6";
import { useMediaQuery, useToggle } from "@hooks/hook";
import { ADMIN_LINKS, USER_PROFILE_LINK } from "@constants/index";
import cn from "@utils/cn";
import AdminSidebarItem from "./AdminSIdebarItem";

const shortValue = (value, length) =>
  value?.trim()?.length > length ? value.slice(0, length) + "...." : value;

const MobileSidebar = ({ isMobile, toggle, handleToggle, setToggle }) => (
  <>
    <BackDrop isOpen={isMobile && toggle} onClick={() => setToggle(false)} />
    {isMobile && (
      <Button
        onClick={handleToggle}
        variants="outline"
        className="items-center justify-center max-w-[60px] my-[10px] py-[7px] gap-[6px]"
      >
        <FaBarsStaggered className="text-[19px]" />
      </Button>
    )}
  </>
);

const AdminSidebar = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width:768px)");
  const { handleToggle, setToggle, toggle } = useToggle(false);

  const mobileToggle = useMemo(
    () =>
      isMobile
        ? toggle
          ? "translate-x-[0px]"
          : "translate-x-[-240px]"
        : "transform-none hidden ",
    [isMobile, toggle]
  );

  return (
    <>
      <MobileSidebar
        isMobile={isMobile}
        toggle={toggle}
        handleToggle={handleToggle}
        setToggle={setToggle}
      />

      <aside
        id="profileSidebar"
        className={cn(
          "md:h-min bg-white w-full max-w-[240px] md:flex flex-col items-center justify-start md:static fixed top-[0px] left-0 h-[100vh] md:overflow-hidden overflow-y-auto overflow-x-hidden z-10 md:z-[0] transition-all md:w-[300px]",
          mobileToggle
        )}
        style={{ boxShadow: "0px 0px 6px -4px" }}
      >
        <div className="sidebar w-full h-full py-[10px] border-t border-solid border-[#d7d6d6b5] ">
          <div className="sidebar_heading text-[30px] md:text-[30px] font-PoppinsBold font-bold text-[#222935]  w-full flex items-center border-solid border-b border-[#e5e7eb] py-[10px] justify-start pl-[20px] ">
            Dashboard
          </div>

          <ul className="py-[40px] flex flex-col">
            {ADMIN_LINKS.map((item) => (
              <AdminSidebarItem key={item.name} {...item} onClick={()=>setToggle(false)} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default memo(AdminSidebar);
