import React, { useState } from "react";

interface ITab {
  label: string;
  content: any;
}
interface IProps {
  tabData: ITab[];
}
const Tabs = (props: IProps) => {
  const { tabData } = props;
  const [currentTabContent, setCurrentTabContent] = useState<ITab>(tabData[0]);
  const onClickButtonHandle = (tabId: string) => {
    const currentTab = tabData.filter((tab: ITab) => tab.label === tabId)[0];
    setCurrentTabContent(currentTab);
  };
  return (
    <div>
      <div className="tab-container">
        {tabData.map((tab: ITab) => {
          return (
            <button
              key={tab.label}
              className={
                tab.label === currentTabContent.label
                  ? "tab-button selected-button"
                  : "tab-button"
              }
              onClick={() => onClickButtonHandle(tab.label)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="tab-content">{currentTabContent.content}</div>
    </div>
  );
};

export default Tabs;
