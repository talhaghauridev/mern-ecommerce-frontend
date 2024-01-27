import React, { memo, useMemo } from "react";
import { USER_DROPDOWN_LINKS } from "@constants/index";
import { avatar } from "@assets/images";
import { Dropdown, Image } from "@components/ui";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useLogout from "@hooks/useLogout";

const DropdownUserItem = memo((item) => (
  <Link to={item.path} key={item.path}>
    <Dropdown.Item>
      <span className="text-[15px] md:text-[18px]">{item.icon}</span>
      {item.name}
    </Dropdown.Item>
  </Link>
));

const UserDropDown = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { isLoading, handleLogout } = useLogout();
  const filteredLinks = useMemo(() => {
    return userInfo?.role !== "admin"
      ? USER_DROPDOWN_LINKS.filter((item) => item.name !== "Dashboard")
      : USER_DROPDOWN_LINKS;
  }, [userInfo?.user?.role]);

  return (
    <Dropdown>
      <Dropdown.Button>
        <Image
          src={avatar}
          alt="avatar"
          className="w-[100%] h-[100%] max-w-[34px]  rounded-full "
        />
      </Dropdown.Button>
      <Dropdown.List>
        {filteredLinks?.map((item) => (
          <DropdownUserItem {...item} key={item.path} />
        ))}
        <Dropdown.Item onClick={handleLogout}>
          <TbLogout className="text-[15px] md:text-[18px]" />
          Logout
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default memo(UserDropDown);
