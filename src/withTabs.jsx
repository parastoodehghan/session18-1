import React, { useState } from "react";

const withTabs = (WrappedComponent, tabs) => {
  return function TabComponent(props) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
      setActiveTab(index);
    };

    return (
      <div>
        <div className="tab-header">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={activeTab === index ? "active-tab" : ""}
              onClick={() => handleTabChange(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <WrappedComponent activeTab={activeTab} {...props} />
        </div>
      </div>
    );
  };
};

export default withTabs;
