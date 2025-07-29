import { BackDrop, Button, Image } from "@/components/ui";
import { USER_PROFILE_LINK } from "@/constants/index";
import { useMediaQuery, useToggle } from "@/hooks/hook";
import useLogout from "@/hooks/useLogout";
import cn from "@/utils/cn";
import { memo, useCallback, useMemo } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const shortValue = (value, length) => {
   const newValue = value?.trim()?.length > length ? value.slice(0, length) + "...." : value;
   return newValue;
};

const UserSidebar = () => {
   const { userInfo } = useSelector((state) => state.user);
   const { pathname } = useLocation();
   const isMobile = useMediaQuery("(max-width:768px)");
   const { handleToggle, setToggle, toggle } = useToggle(false);
   const { handleLogout } = useLogout();

   const MobileSidebar = useCallback(
      () => (
         <>
            <BackDrop
               isOpen={isMobile && toggle}
               onClick={() => setToggle(false)}
            />
            {isMobile && (
               <Button
                  onClick={handleToggle}
                  variants={"outline"}
                  className={"items-center justify-center max-w-[60px] my-[10px] py-[7px] gap-[6px]"}>
                  <FaBarsStaggered className="text-[19px]" />
               </Button>
            )}
         </>
      ),
      [toggle, isMobile]
   );

   const mobileToggle = useMemo(
      () => (isMobile ? (toggle ? "translate-x-[0px]" : "translate-x-[-240px]") : "transform-none hidden "),
      [isMobile, toggle]
   );

   return (
      <>
         <MobileSidebar />

         <aside
            id="profileSidebar"
            className={cn(
               "md:h-min bg-white w-full max-w-[240px] md:flex flex-col items-center justify-start md:static fixed top-[0px] left-0 h-[100vh] md:overflow-hidden overflow-y-auto overflow-x-hidden z-10 md:z-[0] transition-all md:w-[300px]",
               mobileToggle
            )}
            style={{
               boxShadow: "0px 0px 6px -4px"
            }}>
            <div className="sidebar w-full h-full py-[10px] border-t border-solid border-[#d7d6d6b5] ">
               <div className="sidebar_heading border-b border-solid border-[#d7d6d6b5] py-[10px] px-[15px] flex items-center justify-between gap-[10px]">
                  <Image
                     src={userInfo?.avatar?.url}
                     alt={userInfo?.name}
                     className="w-[40px] h-[40px]  max-w-[45px] rounded-full  border-solid border border-[#e5e7eb] "
                  />
                  <div className="w-full">
                     <h1 className="text-[#2b3445] font-semibold font-Poppins text-[17px] mb-[-6px]">{shortValue(userInfo?.name, 12)}</h1>
                     <p className="text-[14px] font-Sans font-[400]">{shortValue(userInfo?.email, 14)}</p>
                  </div>
               </div>

               <ul className="py-[40px] flex flex-col ">
                  {USER_PROFILE_LINK.map(({ path, name, icon: Icon }) => (
                     <Link
                        to={path}
                        className="items-center justify-start flex gap-[6px]"
                        onClick={() => isMobile && setToggle(false)}
                        key={name}>
                        <li
                           className={cn(
                              "cursor-pointer sm:text-[15px] text-[14px] text-[#2b3445] font-Sans  sm:w-[100%] md:w-[100%] py-[12px] px-[16px] border-solid border-b border-[#e5e7eb] flex items-center justify-start gap-[5px] transition-all w-full hover:bg-[#2b34450f] ",
                              name === "Profile" && "border-t",
                              pathname === path && "bg-[#2b34450f]"
                           )}>
                           <Icon />
                           <h1 className="text-[15px]">{name}</h1>
                        </li>
                     </Link>
                  ))}
                  <button
                     className="cursor-pointer sm:text-[15px] text-[14px] text-[#2b3445] font-Sans sm:w-[100%] md:w-[100%] py-[12px] px-[16px] border-solid border-b border-[#e5e7eb] flex items-center justify-start gap-[5px] transition-all hover:bg-[#2b34450f] w-full "
                     onClick={handleLogout}>
                     <TbLogout className="text-[15px] md:text-[18px]" />
                     <h1 className="text-[15px]">Logout</h1>
                  </button>
               </ul>
            </div>
         </aside>
      </>
   );
};

export default memo(UserSidebar);
