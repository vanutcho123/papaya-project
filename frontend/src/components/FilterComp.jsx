import React from "react";
import { filters } from "../constants";

const FilterComp = () => {
  return (
    <div
      className={`fixed top-[65.6px] mb-4 right-8 overflow-x-auto bg-filter `}
    >
      <ul className="list-none flex items-center gap-7">
        {filters.map((item, index) => (
          <li
            className="py-3 px-4 text-[15px] font-semibold leading-[22px] tracking-tight whitespace-nowrap cursor-pointer 
             hover:text-white hover:rounded bg-filter-item"
            key={index}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComp;
