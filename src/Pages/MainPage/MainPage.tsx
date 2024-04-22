import {memo, useState} from "react";
import Tabs from "../../Components/Tabs/Tabs";
import classes from "./MainPage.module.css";
import {tabsConfig} from "./TabsConfig";

const MainPage = memo(() => {
  const [selectedTabId, setSelectedTabId] =
    useState<string>(tabsConfig[0].id);

  return (
    <div className={classes.mainContainer}>
      <Tabs
        tabs={tabsConfig}
        selectedTabId={selectedTabId}
        setSelectedTabId={setSelectedTabId}
      />
    </div>
  );
});
MainPage.displayName = "MainPage";

export default MainPage;