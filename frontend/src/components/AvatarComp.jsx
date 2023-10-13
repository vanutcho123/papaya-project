import React from "react";
import { Avatar, Dropdown } from "flowbite-react";
import { avatarDefault } from "../assets";

const AvatarComp = () => {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={<Avatar alt="User settings" img={avatarDefault} rounded />}
    >
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <div>Dashboard</div>
      <div>Settings</div>
      <div>Earnings</div>
      <Dropdown.Divider />
      <div>Sign out</div>
    </Dropdown>
  );
};

export default AvatarComp;
