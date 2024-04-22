import {JSX, MemoExoticComponent, ReactElement, ReactNode} from "react";
import {Market} from "../../Services/Constants/Markets";
import {Outcome} from "../../Services/Constants/Outcomes";

export type TComponent = MemoExoticComponent<() => JSX.Element>;

export type TVoidFn<T = any> = (args: T) => void;

export interface IWithMarket {
  market: Market;
}

export interface IWithOutcome {
  outcome: Outcome;
}