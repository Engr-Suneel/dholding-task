import { TimeFrameEnum } from "../enums";
import { ITimeFrame } from "../interfaces";

export const timeFrameData: ITimeFrame[] = [
  {
    label: "Daily",
    value: TimeFrameEnum.DAILY
  },
  {
    label: "Weekly",
    value: TimeFrameEnum.WEEKLY,
    count: 7
  },
  {
    label: "Monthly",
    value: TimeFrameEnum.MONTHLY,
    count: 30
  }
]