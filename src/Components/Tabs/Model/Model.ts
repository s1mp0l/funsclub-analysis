import {TComponent} from "../../../Shared/Model/Model";

export type ITabs = ITab[];

export interface ITab {
  id: string;
  title: string;
  component: TComponent;
}