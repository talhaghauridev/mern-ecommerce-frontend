import React, { useMemo, memo } from "react";
import { useToggle } from "@/hooks/hook";
import { LuEye, LuEyeOff } from "react-icons/lu";
import cn from "@/utils/cn";
const Input = React.forwardRef(
  (
    { name, type, label, leftIcon: LIcon, rightIcon: RIcon, error, ...props },
    ref
  ) => {
    const { handleToggle, toggle: show } =
      type === "password" && useToggle(false);

    const inputType = useMemo(
      () => (type === "password" ? (show ? "text" : "password") : type),
      [type, show]
    );

    return (
      <>
        <div className={`${name}_input flex flex-col gap-[5px] w-[100%]`}>
          {label && (
            <label className="font-PoppinsBold text-[#2b3445] text-[15px] sm:text-[16px]">
              {label}
            </label>
          )}
          <div
            className={cn(
              `flex w-[100%] relative overflow-hidden border-solid border-[1px] h-[42.5px] sm:h-[45px]  rounded-[4px]`,
              error ? "border-[red!important]" : "border-[#c5c5c5ed!important]"
            )}
          >
            {LIcon && (
              <span className="absolute left-[8px] top-0 h-[100%] flex items-center justify-center text-[22px] text-[#2b3445]">
                <LIcon className={"text-[19px] sm:text-[20px]"} />
              </span>
            )}
            <input
              type={inputType}
              name={name}
              id={name}
              {...props}
              ref={ref}
              className={cn(
                "w-[100%] h-[100%] outline-none font-Poppins text-[16px] text-black placeholder:font-Poppins placeholder:text-[15px] placeholder:font-[200] placeholder:text-gray-400 pr-[20px] pl-[20px]",
                LIcon && "pl-[35px]",
                RIcon && "pr-[35px]"
              )}
            />
            {RIcon && (
              <span className="absolute right-[8px] top-0 h-[100%] flex items-center justify-center text-[22px] text-[#2b3445]">
                <RIcon className={"text-[19px] sm:text-[20px]"} />
              </span>
            )}
            {type === "password" && (
              <button
                type="button"
                onClick={handleToggle}
                className="absolute right-[8px] top-0 h-[100%] flex items-center justify-center text-[22px] cursor-pointer selection:not-sr-only transition-all text-[#2b3445]"
              >
                {show ? (
                  <LuEye className="text-[19px] sm:text-[20px]" />
                ) : (
                  <LuEyeOff className="text-[19px] sm:text-[20px]" />
                )}
              </button>
            )}
          </div>
          {error && (
            <span className="error text-[red] font-Sans text-[14px] md:text-[15px]">
              {error}
            </span>
          )}
        </div>
      </>
    );
  }
);
export default memo(Input);
