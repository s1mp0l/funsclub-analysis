import {Dispatch, memo, SetStateAction} from "react";
import {IWithSetSelectMarkets} from "../Model/Model";
import AddSelectedMarketList from "../AddSelectedMarketList/AddSelectedMarketList";
import classes from "./AddSelectedMarketContainer.module.css";


interface SelectMarketContainerProps extends IWithSetSelectMarkets {
  setSelectingNewItem: Dispatch<SetStateAction<boolean>>;
}

const SelectMarketContainer = memo<SelectMarketContainerProps>(({
                                                                  setSelectedMarkets,
                                                                  setSelectingNewItem,
                                                                  selectedMarkets
                                                                }) => {
  return (
    <div className={classes.addSelectedMarketContainer}>
      <button
        onClick={() => setSelectingNewItem(false)}
        className={classes.hide}
      >-</button>
      <AddSelectedMarketList
        selectedMarkets={selectedMarkets}
        setSelectedMarkets={setSelectedMarkets}
      />
    </div>
  );
});
SelectMarketContainer.displayName = "SelectMarketContainer";

export default SelectMarketContainer;