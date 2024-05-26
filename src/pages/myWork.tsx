import React, { useEffect, useState } from "react";
import Tabs from "../components/tabs";
import Shimmertab from "../components/tabs/shimmertab";

const MyWork = () => {
  const tabArray = [
    "Shimmer Effects",
    "Toaster",
    "SSO",
    "Modals",
    "File Exploror",
    "Progress Bar",
    "Stepper",
    "Drag and drop notes",
    "Pagination",
   "Walk-through helper" 
  ];
  const [tabs, setTabs] = useState(tabArray);
  const [selectedTab, setSelectedTab] = useState("Shimmer Effects");
  const [tabContentMapper, settabContentMapper] = useState({
    "Shimmer Effects": <Shimmertab />,
    Toaster: <div>About</div>,
    Contact: <div>Contact</div>,
  });

  const handleOnClickTab = (tab: any) => {
    setSelectedTab(tab);
  };

  return (
    <section className="flex container">
      <div className="projects">
        <Tabs>
          <div className="tab">
            {tabs.map((tab: string, key: number) => {
              return (
                <button key={key} onClick={() => handleOnClickTab(tab)}>
                  {tab}
                </button>
              );
            })}
            {tabContentMapper["Shimmer Effects"]}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default MyWork;
