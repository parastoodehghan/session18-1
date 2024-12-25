import React from "react";

const TabsContent = ({ activeTab, content }) => {
  return (
    <div>
      <p>{content[activeTab]}</p>
    </div>
  );
};

export default TabsContent;
