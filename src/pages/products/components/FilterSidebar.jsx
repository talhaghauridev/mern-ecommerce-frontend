import { FILTERS } from "@constants/index";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import React, { useState, useMemo, useCallback, memo } from "react";
import Slider from "@mui/material/Slider";
import { BackDrop, Button } from "@components/ui";
import { useMediaQuery, useToggle } from "@hooks/hook";
import { FaFilter } from "react-icons/fa";
import cn from "@utils/cn";

const FilterSidebar = () => {
  const [cateValue, setCateValue] = useState(true);
  const [ratValue, setRatValue] = useState(true);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState(null);
  const [ratings, setRatings] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { handleToggle, setToggle, toggle } = useToggle(false);

  const handlePriceChange = useCallback((event, newValue) => {
    setPrice(newValue);
  }, []);

  const handleCategoryChange = useCallback((cate) => {
    setCategory(cate.toLowerCase());
    setCateValue(true);
  }, []);

  const handleRatingChange = useCallback((rating) => {
    setRatings(rating);
    setRatValue(true);
  }, []);

  const clearAllHandler = useCallback(() => {
    console.log("VCCCD");
    setPrice([0, 25000]);
    setCategory(null);
    setRatings(null);
    setRatValue(false);
    setCateValue(false);
  }, []);

  const priceSlider = useMemo(
    () => (
      <Slider
        value={price}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        getAriaLabel={() => "Price range slider"}
        min={0}
        max={25000}
      />
    ),
    [price, handlePriceChange]
  );

  const MobileSidebar = useCallback(
    () => (
      <>
        <BackDrop
          isOpen={isMobile && toggle}
          onClick={() => setToggle(false)}
        />
        {isMobile && (
          <Button className={"bg-slate-700"} onClick={handleToggle}>
            <FaFilter />
          </Button>
        )}
      </>
    ),
    [toggle, isMobile]
  );

  return (
    <>
      <MobileSidebar />
      <aside
        id="productSidebar"
        className={cn(
          "md:h-min bg-white w-full max-w-[240px] md:flex flex-col items-center justify-start md:static fixed top-[0px] left-0 h-[100vh] md:overflow-hidden overflow-y-auto overflow-x-hidden z-10 md:z-[0] transition-all",
          isMobile
            ? toggle
              ? "translate-x-[0px]"
              : "translate-x-[-240px]"
            : "transform-none hidden "
        )}
      >
        <div className="sidebar w-full h-full py-[10px] ">
          <div className="sidebar_heading border-b border-solid border-[#d7d6d6b5] py-[10px] px-[15px] flex items-center justify-between">
            <h1 className="text-[#2b3445] font-semibold text-[22px]">Filter</h1>
            <span
              className="text-[#2b3445] font-semibold text-[14px] cursor-pointer"
              onClick={clearAllHandler}
            >
              Clear All
            </span>
          </div>

          <div className="sidebar_slider border-b border-solid border-[#d7d6d6b5] p-[15px]">
            <h1 className="text-[20px]">Price</h1>
            {priceSlider}
            <div className="slider_value_box flex items-center justify-between gap-[15px] text-[15px] mt-[10px] mb-[5px] ">
              <span className="max-w-[75px] py-[6px] px-[5px] w-full text-center bg-[#f9fafb] border border-solid border-[#d7d6d6b5]">
                {price[0]}
              </span>
              <span className="max-w-[75px] py-[6px] px-[5px] w-full text-center bg-[#f9fafb] border border-solid border-[#d7d6d6b5]">
                {price[1]}
              </span>
            </div>
          </div>

          <div className="sidebar_categories flex flex-col gap-y-[10px] p-[15px]  border-b border-solid border-[#d7d6d6b5] p-15">
            <h1 className="text-[20px]">Categories</h1>
            <div className="sidebar_radio_group">
              <RadioGroup>
                {FILTERS.Categories?.map((cate) => (
                  <FormControlLabel
                    label={<span className="text-[15px]">{cate}</span>}
                    value={cateValue ? cate : null}
                    control={<Radio size="small" />}
                    key={cate}
                    onChange={() => handleCategoryChange(cate)}
                    size="20px"
                  />
                ))}
              </RadioGroup>
            </div>
          </div>

          <div className="sidebar_ratings p-[15px] flex flex-col items-start justify-center gap-y-[10px]">
            <h1 className="text-[20px]">Ratings</h1>
            <div className="sidebar_checkbox_group">
              <RadioGroup>
                {FILTERS.Ratings?.map((rat) => (
                  <FormControlLabel
                    key={rat}
                    value={ratValue ? rat : null}
                    name="rating"
                    label={
                      <span className="text-[15px] flex items-center">
                        {rat} <AiFillStar /> & above
                      </span>
                    }
                    control={<Radio size="small" />}
                    onChange={() => handleRatingChange(rat)}
                  />
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default memo(FilterSidebar);
