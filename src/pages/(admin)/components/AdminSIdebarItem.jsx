import cn from "@utils/cn";
import { Link, useLocation } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";
import { memo } from "react";

const AdminSidebarItem = ({ icon: Icon, name, path, links, onClick }) => {
  const { pathname } = useLocation();

  return (
    <>
      {links ? (
        <div className="flex flex-col gap-1">
          <li
            className={cn(
              " sm:text-[15px] text-[14px] text-[#2b3445] font-Sans  sm:w-[100%] md:w-[100%] py-[12px] px-[16px] border-solid border-b border-[#e5e7eb] flex items-center justify-start gap-[5px] ",
              name === "Profile" && "border-t",
              pathname === path && "bg-[#2b34450f]"
            )}
          >
            <Icon />
            <h1 className="text-[15px]">{name}</h1>
          </li>

          <ul>
            {links?.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                onClick={onClick}
                className={cn(
                  "cursor-pointer sm:text-[15px] text-[14px] text-[#2b3445] font-Sans  sm:w-[100%] md:w-[100%] py-[12px] px-[16px] border-solid border-b border-[#e5e7eb] flex items-center justify-start gap-[5px] transition-all w-full hover:bg-[#2b34450f] ",
                  pathname === link.path && "bg-[#2b34450f]"
                )}
              >
                <RxDotFilled />
                {link.icon}
                <h1 className="text-[15px]">{link.name}</h1>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <Item name={name} path={path} icon={Icon} onClick={onClick} />
      )}
    </>
  );
};

export default AdminSidebarItem;

const Item = memo(({ path, name, icon: Icon, onClick }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      className="items-center justify-start flex gap-[6px]"
      key={name}
      onClick={onClick}
    >
      <li
        className={cn(
          "cursor-pointer sm:text-[15px] text-[14px] text-[#2b3445] font-Sans  sm:w-[100%] md:w-[100%] py-[12px] px-[16px] border-solid border-b border-[#e5e7eb] flex items-center justify-start gap-[5px] transition-all w-full hover:bg-[#2b34450f] ",
          name === "Profile" && "border-t",
          pathname === path && "bg-[#2b34450f]"
        )}
      >
        <Icon />
        <h1 className="text-[15px]">{name}</h1>
      </li>
    </Link>
  );
});
