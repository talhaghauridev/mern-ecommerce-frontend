import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { useState, useEffect, useCallback } from "react";
import { NAV } from "@constants";
import { Logo } from "@assets/images";
import { Image } from "@components/ui";
import BottomNavigation from "@layout/Header/BottomNavigation";
import { useScroll, useToggle } from "@hooks/hook";
import cn from "@utils/cn";
import UserDropDown from "./UserDropDown";
import SearchBox from "./SearchBox";
const Header = () => {
  const [search, setSearch] = useState("");
  const { pathname } = useLocation();
  const [isAuth, setIsAuth] = useState(true);
  const [navScroll, setNavScroll] = useState(false);
  const [searchModel, setSearchModel] = useState(false);
  const navigate = useNavigate();

  //Handle Search
  const handleSearch = useCallback(() => {
    console.log("handleSearch");
    if (search.trim()) {
      navigate(`/products/${search}`);
    } else {
      navigate(`/products`);
    }
  }, [search, navigate]);

  // Handle Scroll Animation
  const handleScroll = useCallback(() => {
    if (window.scrollY >= 360) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  });

  useEffect(() => {
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
          `w-[100%] border-b border-solid border-[#d1d5db] h-[70px] md:h-[74px]`,
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

          <SearchBox
            setSearch={setSearch}
            searchModel={searchModel}
            setSearchModel={setSearchModel}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
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
