import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const ItemSidebar = ({ index, item, sub }) => {
  return (
    <li key={index} className="sidebar-item">
      <NavLink
        to={`/${item.id}`}
        className={({ isActive, isPending }) => {
          return `flex items-center ${
            sub ? "py-[17px]" : "py-[15px]"
          } pr-[63px] sidebar-link ${
            isActive ? "active" : isPending ? "pending" : ""
          }`;
        }}
      >
        {sub === false ? (
          <img
            src={item.icon}
            alt="Icon"
            className="w-[32px] h-[32px] object-cover rounded-[50%]"
          />
        ) : (
          <span className="w-22px h-[19px]">{item.icon}</span>
        )}

        <span className="text-[#9d9fb3] text-[17px] font-medium ml-6">
          {item.title}
        </span>
      </NavLink>
    </li>
  );
};

export default ItemSidebar;

ItemSidebar.propTypes = {
  index: PropTypes.string,
  item: PropTypes.object,
  sub: PropTypes.bool,
};
