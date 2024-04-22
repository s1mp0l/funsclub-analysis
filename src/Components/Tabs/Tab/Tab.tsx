import {createElement, memo} from "react";
import {ITab} from "../Model/Model";
import classes from "./Tab.module.css";

interface TabProps {
  tab: ITab;
}

const Tab = memo<TabProps>(({
  tab
                            }) => {
  return (
    <div className={classes.tabContainer}>
      {createElement(tab.component)}
    </div>
  );
});
Tab.displayName = "Tab";

export default Tab;