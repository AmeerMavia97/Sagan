import React, { useState } from "react";

const AccountSettingTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div className="flex w-full gap-10 overflow-hidden mt-8 mb-28">
      {/* Left Side Tab Buttons */}
      <div className="w-1/3 2xl:w-1/4 p-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`block w-full text-left px-8 py-4 mb-10 font-semibold rounded-full font-Inter text-[15px] 2xl:text-[24px]
              ${activeTab === tab.id ? "bg-[#FFB5C0] text-black font-semibold" : "bg-white text-gray-800 hover:bg-gray-200"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Right Side Tab Content */}
      <div className="w-3/4 2xl:w-3/4  ">
        {tabs.find((tab) => tab.id === activeTab)?.content || <p>No content available.</p>}
      </div>
    </div>
  );
};

export default AccountSettingTabs;
