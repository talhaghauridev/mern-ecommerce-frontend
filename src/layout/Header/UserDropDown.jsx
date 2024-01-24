import React, { memo } from "react";
import { USER_DROPDOWN_LINKS } from "@constants/index";
import { avatar } from "@assets/images";
import { Dropdown, Image } from "@components/ui";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";

const UserDropDown = () => {
    console.log("UserDropDown");
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
        {USER_DROPDOWN_LINKS.map((item) => (
          <Link to={item.path} key={item.path}>
            <Dropdown.Item>
              {item.icon}
              {item.name}
            </Dropdown.Item>
          </Link>
        ))}
        <Dropdown.Item>
          <TbLogout />
          Logout
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default memo(UserDropDown);
