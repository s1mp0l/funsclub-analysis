import {memo, useEffect, useState} from "react";
import ScoreMatrixGrid from "../../Components/ScoreMatrixGrid/ScoreMatrixGrid";
import {getScoreMatrix} from "../../Services/CalculateMarkets/Utils/GetScoreMatrix";
import {createEmptyMatrix, formatMatrixToPercent} from "../../Shared/Utils/Common";
import classes from "./ScoreMatrixCalculator.module.css";
import {MarketOutcomes, MarketNames, Market} from "../../Services/Constants/Markets";
import MarketCard from "../../Components/MarketCard/MarketCard";
import {getXgFromMarkets} from "../../Services/Test/GetXgFromMarkets";

const checkXgValid = (n1: number, n2: number): boolean => {
  if (!isFinite(n1) || !isFinite(n2)) {
    alert("Мат. ожидание голов должно быть числом!");
    return false;
  }
  if (n1 <= 0 || n2 <= 0) {
    alert("Мат. ожидание голов должно быть > 0!");
    return false;
  }
  if (n1 > 7 || n2 > 7) {
    alert("Мат. ожидание голов должно быть не может быть > 7!");
    return false;
  }
  return true;
}

const markets: Market[] = [
  MarketOutcomes[MarketNames.RESULT_1X2]
];

const ScoreMatrixCalculator = memo(() => {
  const [homeGoals, setHomeGoals] = useState('');
  const [awayGoals, setAwayGoals] = useState('');
  const [matrix, setMatrix] =
    useState<number[][]>(createEmptyMatrix(8,8));

  const generateMatrix = () => {
    // Преобразование введенных значений в числа
    const homeExpectedGoals = parseFloat(homeGoals);
    const awayExpectedGoals = parseFloat(awayGoals);

    if (!checkXgValid(homeExpectedGoals, awayExpectedGoals)) return;

    // Генерация матрицы точных счетов
    const newMatrix = getScoreMatrix(homeExpectedGoals, awayExpectedGoals);
    setMatrix(formatMatrixToPercent(newMatrix));
  };

  useEffect(() => {
    markets[0].outcomes[0].probValue = 0.14754098360655737;
    markets[0].outcomes[1].probValue = 0.5901639344262295;
    markets[0].outcomes[2].probValue = 0.2622950819672131;

    markets[0].outcomes[0].oddValue = 4.8;
    markets[0].outcomes[1].oddValue = 1.2;
    markets[0].outcomes[2].oddValue = 2.7;
  }, []);

  return (
    <div className={classes.contentContainer}>
      <div className={classes.inputContainer}>
        <label>
          Математическое ожидание голов для первой команды:
          <input
            placeholder={"Введите действительное число от 0 до 7"}
            type="number"
            value={homeGoals}
            onChange={(e) => setHomeGoals(e.target.value)}
          />
        </label>
        <label>
          Математическое ожидание голов для второй команды:
          <input
            placeholder={"Введите действительное число от 0 до 7"}
            type="number"
            value={awayGoals}
            onChange={(e) => setAwayGoals(e.target.value)}
          />
        </label>
        <button onClick={generateMatrix}>
          Рассчитать вероятности
        </button>
      </div>
      <ScoreMatrixGrid matrix={matrix}/>

      {
        matrix[0][0] ? Object.entries(MarketOutcomes).map(([_, market]) =>
          <MarketCard matrix={matrix} market={market} key={`Market-${market.name}`}/>
        ) : null
      }
    </div>
  );
});
ScoreMatrixCalculator.displayName = "ScoreMatrixCalculator";

export default ScoreMatrixCalculator;