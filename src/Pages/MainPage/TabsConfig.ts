import {ITabs} from "../../Components/Tabs/Model/Model";
import ScoreMatrixCalculator from "../ScoreMatrixCalculator/ScoreMatrixCalculator";
import GetFromMarketsPage from "../GetFromMerketsPage/GetFromMarketsPage";

export const tabsConfig: ITabs = [
  {
    id: "input-xg",
    title: "Ввести XG вручную",
    component: ScoreMatrixCalculator
  },
  {
    id: "get-xg-from-markets",
    title: "Ввести коэффициенты букмекеров",
    component: GetFromMarketsPage,
  }
]