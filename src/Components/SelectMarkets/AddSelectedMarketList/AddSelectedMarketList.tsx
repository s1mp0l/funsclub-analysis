import {memo} from "react";
import {IWithSetSelectMarkets} from "../Model/Model";
import {MarketName, MarketNames, MarketOutcomes} from "../../../Services/Constants/Markets";
import classes from "./AddSelectedMarketList.module.css";

interface ListItemProps extends IWithSetSelectMarkets {
  marketKey: MarketName;
}

const AddSelectedMarketListItem = memo<ListItemProps>(({
                                                             setSelectedMarkets,
  marketKey
                                                           }) => {
  const addSelectedMarket = () => setSelectedMarkets(prev => [...prev, marketKey]);
  const market = MarketOutcomes[MarketNames[marketKey]];

  return (
    <button
      onClick={addSelectedMarket}
      className={classes.listItem}
    >
      {market.name}
    </button>
  );
});
AddSelectedMarketListItem.displayName = "AddSelectedMarketListItem";


const AddSelectedMarketList = memo<IWithSetSelectMarkets>(({
  selectedMarkets,
  setSelectedMarkets
                                                               }) => {
  const allMarkets =
    Object.keys(MarketNames).filter(key =>
      isNaN(Number(key))
      && !selectedMarkets?.find(it => it === key)
    ) as MarketName[];

  return (
    <div className={classes.list}>
      {allMarkets.length
        ? allMarkets.map(m => (
            <AddSelectedMarketListItem
              key={`AddSelectedMarketItem-{${m}`}
              setSelectedMarkets={setSelectedMarkets}
              marketKey={m}
            />
          )
        )
        : <div className={classes.empty}>Вы выбрали все доступные события</div>
      }
    </div>
  );
});
AddSelectedMarketList.displayName = "AddSelectedMarketList";

export default AddSelectedMarketList;