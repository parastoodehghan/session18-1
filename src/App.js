import React from "react";
import withTabs from "./withTabs";
import TabsContent from "./TabsContent";
import "./App.css";

const tabs = [
  { label: "Home", content: "Welcome!" },
  { label: "Profile", content: "Here you can see your profile information." },
  { label: "Settings", content: "Here you can change your settings." },
];

const EnhancedTabs = withTabs(TabsContent, tabs);

const App = () => {
  return <EnhancedTabs content={tabs.map((tab) => tab.content)} />;
};

export default App;
