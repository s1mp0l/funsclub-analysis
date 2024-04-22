import {memo, useState} from "react";
import SelectMarkets from "../../Components/SelectMarkets/SelectMarkets";
import ScoreMatrixGrid from "../../Components/ScoreMatrixGrid/ScoreMatrixGrid";
import classes from "./GetFromMarketsPage.module.css";
import {MarketName, MarketNames, MarketOutcomes} from "../../Services/Constants/Markets";
import {getXgFromMarkets} from "../../Services/Test/GetXgFromMarkets";
import {getScoreMatrix} from "../../Services/CalculateMarkets/Utils/GetScoreMatrix";
import {createEmptyMatrix, formatMatrixToPercent} from "../../Shared/Utils/Common";
import MarketCard from "../../Components/MarketCard/MarketCard";

const GetFromMarketsPage = memo(() => {
  const [selectedMarkets, setSelectedMarkets] =
    useState<MarketName[]>([]);

  const [formattedMatrix, setMatrix] =
    useState(createEmptyMatrix(8, 8));

  const markets = selectedMarkets.map(m => (
    MarketOutcomes[MarketNames[m]]
  ))

  const calculate = () => {
    const xg = markets.length ? getXgFromMarkets(markets) : null;
    const matrix = xg ? getScoreMatrix(xg[0], xg[1]) : null;
    if (matrix) setMatrix(formatMatrixToPercent(matrix));
    else setMatrix(createEmptyMatrix(8, 8))
  }

  return (
    <div className={classes.pageContainer}>
      <SelectMarkets
        selectedMarkets={selectedMarkets}
        setSelectedMarkets={setSelectedMarkets}
      />
      <button
        className={classes.applyButton}
        onClick={calculate}
      >
        Рассчитать вероятности
      </button>
      <div className={classes.contentContainer}>
        {
          <ScoreMatrixGrid
            matrix={formattedMatrix}
          />
        }

        {
          formattedMatrix && formattedMatrix[0][0] ? Object.entries(MarketOutcomes).map(([_, market]) =>
            <MarketCard matrix={formattedMatrix} market={market} key={`Market-${market.name}`}/>
          ) : null
        }
      </div>
    </div>
  );
});
GetFromMarketsPage.displayName = "GetFromMarketsPage";

export default GetFromMarketsPage;