import {MarketName} from "../../../Services/Constants/Markets";
import {Dispatch, SetStateAction} from "react";

export interface IWithSetSelectMarkets {
  selectedMarkets?: MarketName[];
  setSelectedMarkets: Dispatch<SetStateAction<MarketName[]>>;
}