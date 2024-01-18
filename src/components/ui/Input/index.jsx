import React, { useMemo, memo } from "react";
import { useToggle } from "../../../hooks/hook";
import { LuEye, LuEyeOff } from "react-icons/lu";
const Input = React.forwardRef(
  ({
    name,
    type,
    label,
    leftIcon: LIcon,
    rightIcon: RIcon,
    error,
    ...props
  },ref) => {
    const { handleToggle, toggle: show } =
      type === "password" && useToggle(false);

    console.log("Input", name);
    const inputType = useMemo(
      () => (type === "password" ? (show ? "text" : "password") : type),
      [type, show]
    );

    return (
      <>
        <div className={`${name}_input flex flex-col gap-[5px] w-[100%]`}>
          {label && <label>{label}</label>}
          <div
            className={`flex w-[100%] relative overflow-hidden border-solid border-[1px] h-[45px]   ${
              error ? "border-[red!important]" : "border-[#c5c5c5ed!important]"
            } rounded-[4px]`}
          >
            {LIcon && (
              <span className="absolute left-[8px] top-0 h-[100%] flex items-center justify-center text-[22px] text-[#2b3445]">
                <LIcon />
              </span>
            )}
            <input
              type={inputType}
              name={name}
              id={name}
              {...props}
              ref={ref}
              className={`w-[100%] h-[100%] outline-none font-Poppins text-[16px] text-black placeholder:font-Poppins placeholder:text-[15px] placeholder:font-[200] placeholder:text-gray-400`}
            />
            {RIcon && (
              <span className="absolute right-[8px] top-0 h-[100%] flex items-center justify-center text-[22px] text-[#2b3445]">
                <RIcon />
              </span>
            )}
            {type === "password" && (
              <button
                type="button"
                onClick={handleToggle}
                className="absolute right-[8px] top-0 h-[100%] flex items-center justify-center text-[22px] cursor-pointer selection:not-sr-only transition-all text-[#2b3445]"
              >
                {show ? <LuEye /> : <LuEyeOff />}
              </button>
            )}
          </div>
          {error && <span className="error text-[red]">{error}</span>}
        </div>
      </>
    );
  }
);
export default memo(Input);