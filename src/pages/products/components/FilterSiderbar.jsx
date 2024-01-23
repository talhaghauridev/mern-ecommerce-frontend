import { FILTERS } from "@constants/index";
import React from "react";
import InputRadio from "./InputRadio";

const FilterSiderbar = () => {
  return (
    <aside id="filterSidebar">
      <div>
        <ul className="flex flex-col gap-1">
          {FILTERS.Categories.map((cat) => (
            <InputRadio key={cat} id={cat} name={"cat"} title={cat} />
          ))}
        </ul>
        <ul className="flex flex-col gap-1">
          {FILTERS.Ratings.map((rating) => (
            <li key={rating}>
              <input type="radio" name={"rating"} id={rating} value={rating} />

              {rating}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default FilterSiderbar;
