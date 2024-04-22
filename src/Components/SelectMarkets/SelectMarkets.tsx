import {Dispatch, memo, SetStateAction, useState} from "react";
import classes from "./SelectMarkets.module.css";
import AddSelectedMarketButton from "./AddSelectedMarket/AddSelectedMarketButton";
import SelectedMarket from "./SelectedMarket/SelectedMarket";
import {MarketName, MarketNames, MarketOutcomes} from "../../Services/Constants/Markets";

interface SelectedMarketsProps {
  selectedMarkets: MarketName[];
  setSelectedMarkets: Dispatch<SetStateAction<MarketName[]>>
}

const SelectMarkets = memo<SelectedMarketsProps>(({
  selectedMarkets,
  setSelectedMarkets
                            }) => {
  return (
    <div className={classes.selectMarketsContainer}>
      <div className={classes.selectMarketsContainerInner}>
        {
          selectedMarkets.map(m =>
            <SelectedMarket
              key={`SelectedMarket-{${m}`}
              setSelectedMarkets={setSelectedMarkets}
              marketKey={m}
              market={MarketOutcomes[MarketNames[m]]}
            />
          )
        }
        <AddSelectedMarketButton
          selectedMarkets={selectedMarkets}
          setSelectedMarkets={setSelectedMarkets}
        />
      </div>
    </div>
  );
});
SelectMarkets.displayName = "SelectMarkets";

export default SelectMarkets;