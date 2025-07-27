import React, { createContext, memo, useContext, useMemo } from "react";
import { useClickOutside, useToggle } from "@/hooks/hook";
import cn from "@/utils/cn";

const DropdownContext = createContext();

const useDropdownContext = () => {
   const context = useContext(DropdownContext);
   if (!context) {
      throw new Error("useDropdownContext should be used within the scope of a Dropdown");
   }
   return context;
};

const Dropdown = memo(({ children }) => {
   const { toggle, handleToggle, setToggle } = useToggle(false);
   const ref = useClickOutside(() => setToggle(false));

   const contextValue = useMemo(() => ({ toggleDropdown: handleToggle, isDropdownOpen: toggle }), [handleToggle, toggle]);

   return (
      <div
         className="relative inline-block text-left"
         ref={ref}>
         <DropdownContext.Provider value={contextValue}>{children}</DropdownContext.Provider>
      </div>
   );
});

const Button = memo(({ children, className = "", ...props }) => {
   const { toggleDropdown } = useDropdownContext();

   return (
      <div
         className={cn("cursor-pointer", className)}
         onClick={toggleDropdown}
         type="button"
         {...props}>
         {children}
      </div>
   );
});

const List = memo(({ children, className = "", ...props }) => {
   const { isDropdownOpen } = useDropdownContext();
   return (
      <>
         {isDropdownOpen && (
            <ul
               className={cn("flex flex-col absolute top-[45px] bg-white right-0 rounded-[6px] z-[2]", className)}
               style={{
                  boxShadow: "rgba(43, 52, 69, 0.1) 0px 4px 16px"
               }}
               {...props}>
               {children}
            </ul>
         )}
      </>
   );
});

const Item = memo(({ children, className = "", ...props }) => {
   return (
      <li
         className={cn(
            "cursor-pointer sm:text-[15px] text-[14px] text-[#2b3445] font-Sans w-[170px] sm:w-[180px] md:w-[194px] py-[12px] px-[16px] border-solid border-b border-[#e5e7eb] flex items-center justify-start gap-[5px] transition-all hover:bg-[#2b34450f]",
            className
         )}
         {...props}>
         {children}
      </li>
   );
});

Dropdown.Button = Button;
Dropdown.List = List;
Dropdown.Item = Item;

export default Dropdown;
