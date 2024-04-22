import {memo} from "react";
import classes from "./TabsList.module.css";
import {ITabs} from "../Model/Model";
import TabListItem from "../TabListItem/TabListItem";
import {TVoidFn} from "../../../Shared/Model/Model";

interface TabsListProps {
  tabs: ITabs;
  setSelectedTabId: TVoidFn;
}

const TabsList = memo<TabsListProps>(({
  tabs,
  setSelectedTabId,
                                      }) => {
  return (
    <div className={classes.tabsListInner}>
      {
        tabs.map(t =>
          <TabListItem
            key={`Tab-{${t.id}`}
            tab={t}
            setSelectedTabId={setSelectedTabId}
          />
        )
      }
    </div>
  );
});
TabsList.displayName = "TabsList";

export default TabsList;