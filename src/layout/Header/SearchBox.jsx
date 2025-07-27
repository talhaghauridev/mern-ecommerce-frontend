import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import cn from "@/utils/cn";

const SearchBox = ({ setSearch, searchModel, setSearchModel, ...props }) => {
  const param = useParams();

  useEffect(() => {
    setSearchModel(false);
    document.body.style.overflow = "auto";
  }, [param?.search]);
  return (
    <div
      className={cn(
        `search_box px-[15px] md:px-[0] w-[100%] 
            transition-transform fixed top-0 h-[100vh] z-10 left-0  bg-[white] flex items-center justify-center md:z-0 md:translate-y-[0] md:max-w-[400px] md:h-[100%] md:static md:bg-transparent`,
        searchModel ? "translate-y-[0] " : "translate-y-[-100vh] "
      )}
    >
      <div
        className="absolute top-[20px] flex justify-center items-center border-[1px] border-solid border-[#c5c5c5ed] md:hidden cursor-pointer text-[20px] bg-[#1f293717] p-[10px] rounded-[6px] left-[15px]"
        onClick={() => {
          setSearchModel(false);
          document.body.style.overflow = "auto";
        }}
      >
        <FaArrowLeft />
      </div>
      <div
        className={`flex w-[100%] relative overflow-hidden border-solid border-[1px] h-[44px] bg-[#f9fafb] 
           border-[#d1d5db!important]
           rounded-[6px]  
                md:m-[0px] `}
      >
        <p className="absolute left-[8px] top-0 h-[100%] flex items-center justify-center text-[20px]  text-[#2b3445]">
          <IoMdSearch />
        </p>
        <input
          type="text"
          name="search"
          id="seach"
          onChange={(e) => setSearch(e.target.value)}
          {...props}
          placeholder={"Search Your Product"}
          className={`w-[100%] h-[100%] outline-none  font-Poppins text-[16px] text-black placeholder:font-Poppins placeholder:text-[15px] placeholder:font-[200] placeholder:text-gray-400 dark:placeholder-gray-400 `}
          style={{
            paddingLeft: "40px",
            paddingRight: "20px",
          }}
        />
      </div>
    </div>
  );
};

export default memo(SearchBox);
