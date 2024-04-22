import {memo, useState} from "react";
import classes from "./AddSelectedMarketButton.module.css";
import AddSelectedMarketContainer from "../AddSelectedMartketContainer/AddSelectedMarketContainer";
import {IWithSetSelectMarkets} from "../Model/Model";


const AddSelectedMarketButton = memo<IWithSetSelectMarkets>(({
                                                               setSelectedMarkets,
                                                               selectedMarkets
                                                              }) => {
  const [isSelectingNewItem, setSelectingNewItem] =
    useState(false);

  return !isSelectingNewItem
    ? <button
      className={classes.addSelectedMarketButton}
      onClick={() => setSelectingNewItem(true)}
    >+</button>
    : <AddSelectedMarketContainer
      selectedMarkets={selectedMarkets}
      setSelectingNewItem={setSelectingNewItem}
      setSelectedMarkets={setSelectedMarkets}
    />
});
AddSelectedMarketButton.displayName = "AddSelectedMarketButton";

export default AddSelectedMarketButton;