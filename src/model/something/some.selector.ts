import { statTitles } from "../../Data/statuses";
import { daysInYear, monthsInYear, period } from "../../staticData/date";
import { zeroArray_10 } from "../../staticData/others";
import { getUnitCountSelector } from "../unit/unit.selectors";

//  пока что нет unknow.Reducer, но как появится - сделать селектор. Хз к чему это относится пока что.
export const globalStatistics = [
  {
    statuses: statTitles,
    online: zeroArray_10,
    offline: zeroArray_10,
  }
];

export const MetricCoutnUnits =
  [
    getUnitCountSelector / daysInYear,
    getUnitCountSelector / monthsInYear,
  ];


type goalObjType = {
  period: string[],
  count: number[];
};
export const goalObj: goalObjType = {
  period: period,
  count: MetricCoutnUnits
};