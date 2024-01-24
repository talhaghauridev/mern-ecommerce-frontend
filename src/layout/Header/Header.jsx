import { Link, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { NAV } from "@constants";
import { Logo } from "@assets/images";
import { Image } from "@components/ui";
import BottomNavigation from "@layout/Header/BottomNavigation";
import { useScroll } from "@hooks/hook";
import cn from "@utils/cn";
import UserDropDown from "./UserDropDown";
const Header = () => {
  const { pathname } = useLocation();
  const [isAuth, setIsAuth] = useState(true);
  const [navScroll, setNavScroll] = useState(false);
  const [searchModel, setSearchModel] = useState(false);
  const scroll = useScroll();
  console.log(scroll);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 360) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        id="header"
        className={cn(
          `
         w-[100%] border-b border-solid border-[#d1d5db] h-[70px] md:h-[74px]`,
          navScroll ? "header_animation" : ""
        )}
      >
        <div className="container py-[8px] flex items-center justify-between ">
          {/* Logo */}

          <div className="logo">
            <Link to="/">
              <Image
                src={Logo}
                alt="Logo"
                className="w-[100px] sm:w-[120px] max-w-[400px]   "
              />
            </Link>
          </div>

          <div
            className={cn(
              `search_box w-[100%] 
            transition-transform fixed top-0 h-[100vh] z-10 left-0  bg-[white] flex items-center justify-center md:z-0 md:translate-y-[0] md:max-w-[400px] md:h-[100%] md:static md:bg-transparent`,
              searchModel ? "translate-y-[0] " : "translate-y-[-100vh] "
            )}
          >
            <div
              className="absolute top-[20px] flex justify-center items-center border-[1px] border-solid border-[#c5c5c5ed] md:hidden cursor-pointer text-[20px] bg-[#1f293717] p-[10px] rounded-[6px] left-[15px]"
              onClick={() => {
                setSearchModel(false);
                console.log((document.body.style.overflow = "auto"));
              }}
            >
              <FaArrowLeft />
            </div>
            <div
              className={`flex w-[100%] relative overflow-hidden border-solid border-[1px] h-[44px] bg-[#f9fafb] 
           border-[#d1d5db!important]
           rounded-[6px] 
                [15px] md:m-[0px] `}
            >
              <p className="absolute left-[8px] top-0 h-[100%] flex items-center justify-center text-[20px]  text-[#2b3445]">
                <IoMdSearch />
              </p>
              <input
                type="text"
                name="search"
                id="seach"
                placeholder={"Search Your Product"}
                className={`w-[100%] h-[100%] outline-none  font-Poppins text-[16px] text-black placeholder:font-Poppins placeholder:text-[15px] placeholder:font-[200] placeholder:text-gray-400 dark:placeholder-gray-400 `}
                style={{
                  paddingLeft: "40px",
                  paddingRight: "20px",
                }}
              />
            </div>
          </div>
          {/* NavLinks */}
          <ul className=" gap-[34px] font-PoppinsBold hidden md:flex">
            {NAV.Links.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className={cn(
                  pathname === item.path ? "opacity-1" : "opacity-[0.8]"
                )}
              >
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>

          {/* NavIcons  */}
          <div className="icons flex gap-[25px] items-center justify-end ">
            {NAV.Icons.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className={cn(
                  "cart_icon text-[21px] md:text-[24px] text-[#2b3445eb] ",
                  isAuth && item.path === "/login" ? "hidden" : "flex"
                )}
              >
                {item.icon}
              </Link>
            ))}
            {isAuth && <UserDropDown />}
          </div>
        </div>
      </header>
      <BottomNavigation setSearchModel={setSearchModel} />
    </>
  );
};

export default Header;
