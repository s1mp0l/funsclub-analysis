import {memo} from "react";
import {Market, MarketName} from "../../../Services/Constants/Markets";
import InputOutcome from "../../InputOutcome/InputOutcome";
import classes from "./SelectedMarket.module.css";
import {IWithSetSelectMarkets} from "../Model/Model";

interface SelectedMarketProps extends IWithSetSelectMarkets {
  market: Market;
  marketKey: MarketName;
}

const SelectedMarket = memo<SelectedMarketProps>(({
  market,
  marketKey,
  setSelectedMarkets
                                                  }) => {
  const removeSelectedMarket = () =>
    setSelectedMarkets(prev =>
      prev.filter(it => it !== marketKey)
    );

  return (
    <div className={classes.container}>
      <button
        onClick={removeSelectedMarket}
        className={classes.removeMarket}
      >
        x
      </button>
      <div className={classes.title}>
        {market.name}
      </div>
      <div className={classes.outcomes}>
        {
          market?.outcomes
            ? market?.outcomes.map(it =>
              <InputOutcome
                outcome={it}
                key={`Outcome-${it.name}`}
              />
            )
            : null
        }
      </div>
    </div>
  );
});
SelectedMarket.displayName = "SelectedMarket";

export default SelectedMarket;