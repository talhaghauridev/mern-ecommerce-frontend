import { useState, lazy, Suspense, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
import { Image } from "@/components/ui";
import { Logo } from "@/assets/images";
import { NAV } from "@/constants";
import SearchBox from "./SearchBox";
import { useMediaQuery } from "@/hooks/hook";
import cn from "@/utils/cn";
import { useHeaderScroll, useHeaderSearch } from "@/hooks/header.hooks";
const BottomNavigation = lazy(() => import("@/layout/Header/BottomNavigation"));
const UserDropDown = lazy(() => import("@/layout/Header/UserDropDown"));
const Header = () => {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [searchModel, setSearchModel] = useState(false);
  const { userInfo } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const { setSearch, handelSearch } = useHeaderSearch();
  const { headerScroll } = useHeaderScroll();

  return (
    <>
      <header
        id="header"
        className={cn(
          `w-[100%] border-b border-solid border-[#d1d5db] h-[70px] md:h-[74px]`,
          headerScroll ? "header_animation" : ""
        )}
      >
        <div className="container py-[8px] flex items-center justify-between ">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <Image
                src={Logo}
                alt="Logo"
                className="w-[100px] h-[35px] max-w-[100%] max-h-[100%] sm:h-[40px] sm:w-[120px]  "
              />
            </Link>
          </div>

          <SearchBox
            setSearch={setSearch}
            searchModel={searchModel}
            setSearchModel={setSearchModel}
            onKeyPress={handelSearch}
          />
          {/* NavLinks */}
          <ul className=" gap-[34px] font-PoppinsBold hidden md:flex">
            {NAV.Links.map((item, index) => (
              <Item
                name={item.name}
                path={item.path}
                key={index}
                className={
                  pathname === item.path ? "opacity-1" : "opacity-[0.8]"
                }
              />
            ))}
          </ul>

          {/* NavIcons  */}
          <div className="icons flex gap-[25px] items-center justify-end ">
            {NAV.Icons.map((item, index) =>
              item.path === "/cart" ? (
                <Badge
                  badgeContent={cartItems?.length}
                  color={"primary"}
                  key={index}
                >
                  <Item {...item} className={"header_icon"} />
                </Badge>
              ) : (
                <Item
                  {...item}
                  key={index}
                  className={cn(
                    "header_icon",
                    userInfo && item.path === "/login" ? "hidden" : "flex"
                  )}
                />
              )
            )}
            {userInfo && (
              <Suspense fallback={"Loading..."}>
                <UserDropDown />
              </Suspense>
            )}
          </div>
        </div>
      </header>
      {isMobile && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <BottomNavigation setSearchModel={setSearchModel} />
        </Suspense>
      )}
    </>
  );
};

export default Header;

const Item = memo(({ className = "", path, icon, name }) => {
  return (
    <Link to={path} className={cn(className)}>
      {icon && icon}
      {name && name}
    </Link>
  );
});
