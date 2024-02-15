import { daysInYear, monthsInYear, period } from "../../staticData/date";
import { getUnitCountSelector } from "../unit/unit.selectors";


// TO DO: глобальная статистика - это статистика определённго User. Поэтому относится к User.selector. Переместить в нужное место селекторы.

const MetricCoutnUnits = [
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