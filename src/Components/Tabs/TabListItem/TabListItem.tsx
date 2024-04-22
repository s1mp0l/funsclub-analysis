import {memo} from "react";
import {ITab} from "../Model/Model";
import classes from "./TabListItem.module.css";
import {TVoidFn} from "../../../Shared/Model/Model";

interface TabListItemProps {
  tab: ITab;
  setSelectedTabId: TVoidFn;
}

const TabListItem = memo<TabListItemProps>(({
  tab,
                                              setSelectedTabId,
                                            }) => {
  return (
    <button className={classes.tabListItem} onClick={() => setSelectedTabId(tab.id)}>
      {tab.title}
    </button>
  );
});
TabListItem.displayName = "TabListItem";

export default TabListItem;