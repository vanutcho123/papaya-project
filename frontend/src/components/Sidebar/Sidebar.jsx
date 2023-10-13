import React, { useState } from "react";
import { myChannels, sideBarLinks, subscriptions } from "../../constants";
import ItemSidebar from "./ItemSidebar";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";

const Sidebar = () => {
  const visibleChannels = 5;
  const [showAllChannels, setShowAllChannels] = useState(false);
  const renderChannels = (
    showAllChannels ? myChannels : myChannels.slice(0, visibleChannels)
  ).map((channel, index) => <ItemSidebar key={index} item={channel} />);

  return (
    <div className="overflow-x-hidden overflow-y-auto sticky left-0 top-[65.6px] bottom-0 h-[calc(100vh - 65.6px)] sidebar">
      <ul className="flex flex-col list-none">
        {sideBarLinks.map((sidebar, index) => (
          <ItemSidebar key={index} item={sidebar} />
        ))}
      </ul>
      <h2 className="py-4 uppercase text-[13px] font-semibold leading-[130%]">
        My Channel
      </h2>
      <ul className="flex flex-col list-none">
        {renderChannels}
        {myChannels.length > visibleChannels && (
          <div
            className={`cursor-pointer text-[#9d9fb3] text-[17px] font-medium transition-max-h duration-300 ease-in-out transform"
              }`}
            onClick={() => setShowAllChannels(!showAllChannels)}
          >
            {showAllChannels ? (
              <div className="flex items-center py-[17px] pr-[63px]">
                <FaRegArrowAltCircleUp />
                <span className="ml-6">Hide less</span>
              </div>
            ) : (
              <div className="flex items-center py-[17px] pr-[63px]">
                <FaRegArrowAltCircleDown />
                <span className="ml-6">Show more</span>
              </div>
            )}
          </div>
        )}
      </ul>
      <h2 className="py-4 uppercase text-[13px] font-semibold leading-[130%]">
        Subscriptions
      </h2>
      <ul className="flex flex-col list-none">
        {subscriptions.map((subscription, index) => (
          <ItemSidebar key={index} item={subscription} sub={false} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
