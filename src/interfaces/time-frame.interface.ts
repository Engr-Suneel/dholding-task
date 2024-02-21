import { TimeFrameEnum } from "../enums";

export interface ITimeFrame {
  value: TimeFrameEnum;
  label: string;
  count?: number;
}