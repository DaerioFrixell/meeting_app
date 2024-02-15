// Возможно все calc нужно занести в один файл. СalcMethods.ts, например.

import { StatisticByYear_T } from "../types/V2/userApiV2.type";
import { StatusMark } from "../types/statuses";

// TO DO: назвать функцию более коротко.
// TO DO: Сделать индексацию папки.

/** 
 * Функция для суммирования всех Units в статус <Contact> 
 */
export const calcNotPrimalValueByStatus = (arr: StatisticByYear_T[]) => {
  // TO DO: переименовать на говорящее название. AllNotPrimalValues, например.
  const mutableArr = arr;

  let accum = 0;

  mutableArr.forEach(el => {
    if (el.status !== StatusMark.C && el.status !== StatusMark.D) {
      // суммирую value статусов, которые не равны C || D
      accum += el.value
    }
  })

  mutableArr.forEach(el => {
    if (el.status === StatusMark.C) {
      // складываю это значение в статус C
      el.value = accum
    }
  })

  return mutableArr;
}