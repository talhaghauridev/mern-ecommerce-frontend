import React, { memo } from "react";
import { USER_DROPDOWN_LINKS } from "@constants/index";
import { avatar } from "@assets/images";
import { Dropdown, Image } from "@components/ui";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";

const DropdownUserItem = memo((item) => (
  <Link to={item.path} key={item.path}>
    <Dropdown.Item>
      <span className="text-[15px] md:text-[18px]">{item.icon}</span>
      {item.name}
    </Dropdown.Item>
  </Link>
));
const UserDropDown = () => {
  const role = "user";
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
        {role !== "admin"
          ? USER_DROPDOWN_LINKS.filter((item) => item.name !== "Dashboard").map(
              (item) => <DropdownUserItem {...item} key={item.path} />
            )
          : USER_DROPDOWN_LINKS.map((item) => (
              <DropdownUserItem {...item} key={item.path} />
            ))}

        <Dropdown.Item>
          <TbLogout className="text-[15px] md:text-[18px]" />
          Logout
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default memo(UserDropDown);
