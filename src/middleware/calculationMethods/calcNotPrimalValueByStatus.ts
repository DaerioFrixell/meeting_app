import { StatisticByYear_T } from "../../types/V2/userApiV2.type";
import { StatusMark_E } from "../../types/statuses.type";


/** 
 * Суммирует все непервичные статусты у Units в статус <Contact>.
 */
export const calcNotPrimalValueByStatus = (arrayWithStatistics: StatisticByYear_T[]) => {
  const changedArrayWithStatistics = arrayWithStatistics;

  let accum = 0;

  // Cуммирует value статусов, которые не равны C || D.
  changedArrayWithStatistics.forEach(el => {
    if (el.status !== StatusMark_E.C && el.status !== StatusMark_E.D) {
      accum += el.value;
    }
  })

  // Складываю value статусов, которые не равны C || D в value статуса <C>.
  changedArrayWithStatistics.forEach(el => {
    if (el.status === StatusMark_E.C) {
      el.value = accum;
    }
  })

  return changedArrayWithStatistics;
}