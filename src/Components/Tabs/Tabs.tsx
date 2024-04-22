import {memo} from "react";
import classes from "./Tabs.module.css";
import TabsList from "./TabsList/TabsList";
import {type ITabs} from "./Model/Model";
import Tab from "./Tab/Tab";
import {TVoidFn} from "../../Shared/Model/Model";

interface TabsProps {
  tabs: ITabs;
  selectedTabId: string;
  setSelectedTabId: TVoidFn;
}

const Tabs = memo<TabsProps>(({
  tabs,
  selectedTabId,
                                setSelectedTabId
                       }) => {
  const selectedTab = tabs.find(t => t.id === selectedTabId);

  return (
    <div className={classes.tabsLayoutContainer}>
      <div className={classes.tabsList}>
        <TabsList tabs={tabs} setSelectedTabId={setSelectedTabId} />
      </div>
      <div className={classes.tabsInner}>
        {
          selectedTab ? <Tab tab={selectedTab} /> : null
        }
      </div>
    </div>
  );
});
Tabs.displayName = "Tabs";

export default Tabs;