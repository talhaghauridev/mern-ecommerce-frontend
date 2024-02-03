import React, { useState, useMemo, useCallback, memo } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Slider from "@mui/material/Slider";
import { BackDrop, Button } from "@components/ui";
import { IoFilter } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { FILTERS, FILTER_PRICE } from "@constants/index";
import { useMediaQuery, useToggle } from "@hooks/hook";
import { useProductContext } from "../context/ProductContext";
import cn from "@utils/cn";
import { Filter } from "@assets/images";

const FilterSidebar = () => {
  const [showValue, setShowValue] = useState({ category: true, ratings: true });
  const { filters, setFilters } = useProductContext();
  const { handleToggle, setToggle, toggle } = useToggle(false);
  const isMobile = useMediaQuery("(max-width: 766px)");

  //Handle Filters Change
  const handleFiltersChange = useCallback(
    (e, value) => {
      const { name } = e.target;
      const newValue = typeof value === "string" ? value.toLowerCase() : value;

      setFilters((prev) => ({
        ...prev,
        [name]: newValue,
      }));

      if (name === "category" || name === "ratings") {
        setShowValue((prev) => ({ ...prev, [name]: true }));
      }
    },
    [filters]
  );

  //Handle Filters Reset
  const handleFiltersReset = useCallback(() => {
    setFilters({
      category: "",
      ratings: null,
      price: FILTER_PRICE,
    });
    setShowValue({ category: false, ratings: false });
  }, [setFilters]);

  const PriceSlider = useCallback(
    () => (
      <Slider
        value={filters.price}
        onChange={handleFiltersChange}
        valueLabelDisplay="auto"
        getAriaLabel={() => "Price range slider"}
        name="price"
        min={0}
        max={25000}
      />
    ),
    [filters.price, handleFiltersChange]
  );

  const MobileSidebar = useCallback(
    () => (
      <>
        <BackDrop
          isOpen={isMobile && toggle}
          onClick={() => setToggle(false)}
        />
        {isMobile && (
          <Button
            onClick={handleToggle}
            variants={"outline"}
            className={
              "items-center justify-center max-w-[105px] my-[10px] py-[6px] sm:py-[7px] gap-[6px]"
            }
          >
            <img src={Filter} alt="Filter_Image" className="w-[24px]" />
            <span className="font-SansBold text-[20px]">Fiters</span>
            {/* <IoFilter className="text-[19px]"/> */}
          </Button>
        )}
      </>
    ),
    [toggle, isMobile]
  );

  const mobileToggle = useMemo(
    () =>
      isMobile
        ? toggle
          ? "translate-x-[0px]"
          : "translate-x-[-240px]"
        : "transform-none hidden ",
    [isMobile, toggle]
  );

  return (
    <>
      <MobileSidebar />
      <aside
        id="productSidebar"
        className={cn(
          "md:h-min bg-white w-full max-w-[240px] md:flex flex-col items-center justify-start md:static fixed top-[0px] left-0 h-[100vh] md:overflow-hidden overflow-y-auto overflow-x-hidden z-10 md:z-[0] transition-all",
          mobileToggle
        )}
      >
        <div className="sidebar w-full h-full py-[10px] ">
          <div className="sidebar_heading border-b border-solid border-[#d7d6d6b5] py-[10px] px-[15px] flex items-center justify-between">
            <h1 className="text-[#2b3445] font-semibold text-[22px]">Filter</h1>
            <span
              className="text-[#2b3445] font-semibold text-[14px] cursor-pointer"
              onClick={handleFiltersReset}
            >
              Clear All
            </span>
          </div>

          <div className="sidebar_slider border-b border-solid border-[#d7d6d6b5] p-[15px]">
            <h1 className="text-[20px]">Price</h1>
            <PriceSlider />
            <div className="slider_value_box flex items-center justify-between gap-[15px] text-[15px] mt-[10px] mb-[5px] ">
              <span className="max-w-[75px] py-[6px] px-[5px] w-full text-center bg-[#f9fafb] border border-solid border-[#d7d6d6b5]">
                {filters.price[0]}
              </span>
              <span className="max-w-[75px] py-[6px] px-[5px] w-full text-center bg-[#f9fafb] border border-solid border-[#d7d6d6b5]">
                {filters.price[1]}
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
                    value={showValue.category ? cate : null}
                    control={<Radio size="small" />}
                    key={cate}
                    onChange={(e) => handleFiltersChange(e, cate)}
                    size="20px"
                    name="category"
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
                    value={showValue.ratings ? rat : null}
                    name="ratings"
                    label={
                      <span className="text-[15px] flex items-center">
                        {rat} <AiFillStar /> & above
                      </span>
                    }
                    control={<Radio size="small" />}
                    onClick={(e) => handleFiltersChange(e, rat)}
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
