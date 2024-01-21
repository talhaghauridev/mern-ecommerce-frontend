import { Link, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { NAV, USER_DROPDOWN_LINKS } from "../../constants";
import { Logo, avatar } from "../../assets/images";
import {
  Button,
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownList,
  Image,
} from "../../components";
import BottomNavigation from "./BottomNavigation";
import { TbLogout } from "react-icons/tb";
import { useScroll } from "../../hooks/hook";
import cn from "../../utils/cn";
const Header = () => {
  const { pathname } = useLocation();
  // const isAuth: boolean = false;
  const [isAuth, setIsAuth] = useState(true);
  const [navScroll, setNavScroll] = useState(false);
  const [searchModel, setSearchModel] = useState(false);
  let role;
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
         w-[100%] border-b border-solid border-[#d1d5db] h-[74px] ${
           navScroll ? "header_animation" : ""
         }`
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
            className={`search_box w-[100%] ${
              searchModel ? "translate-y-[0] " : "translate-y-[-100vh] "
            } transition-transform fixed top-0 h-[100vh] z-10 left-0  bg-[white] flex items-center justify-center md:z-0 md:translate-y-[0] md:max-w-[400px] md:h-[100%] md:static md:bg-transparent`}
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
           rounded-[6px] m-[15px] md:m-[0px] `}
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
                className={`${
                  pathname === item.path ? "opacity-1" : "opacity-[0.8]"
                }`}
              >
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>

          {/* NacIcons  */}
          <div className="icons flex gap-[25px] items-center justify-end ">
            {NAV.Icons.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className={`cart_icon text-[21px] md:text-[24px] text-[#2b3445eb] 
                  ${isAuth && item.path === "/login" ? "hidden" : "flex"}
                  `}
              >
                {item.icon}
              </Link>
            ))}

            <Dropdown>
              <DropdownButton>
                <Image
                  src={avatar}
                  alt="avatar"
                  className="w-[100%] h-[100%] max-w-[34px]  rounded-full "
                />
              </DropdownButton>
              <DropdownList>
                {USER_DROPDOWN_LINKS.map((item) => (
                  <DropdownItem>
                    {item.icon}
                    {item.name}
                  </DropdownItem>
                ))}
                <DropdownItem>
                  <TbLogout />
                  Logout
                </DropdownItem>
              </DropdownList>
            </Dropdown>
          </div>
        </div>
      </header>
        <BottomNavigation setSearchModel={setSearchModel} />
    </>
  );
};

export default Header;
