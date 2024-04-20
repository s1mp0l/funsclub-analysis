import {memo} from "react";
import {Market} from "../../Services/Constants/Markets";
import classes from "./MarketCard.module.css";
import BaseOutcome from "../BaseOutcome/BaseOutcome";
import {calculateOutcome} from "../../Services/CalculateMarkets/Utils/CalculateOutcome";

interface MarketCardProps {
  matrix: number[][];
  market: Market;
}

const MarketCard = memo<MarketCardProps>(({
  matrix,
  market,
                                          }) => {

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        {market.name}
      </div>
      <div className={classes.outcomes}>
        {
          market?.outcomes
            ? market?.outcomes.map(it =>
              <BaseOutcome
                name={it.name}
                value={calculateOutcome(matrix, it.comp)}
                key={`Outcome-${it.name}`}
              />
            )
            : null
        }
      </div>
    </div>
  );
});
MarketCard.displayName = "MarketCard";

export default MarketCard;