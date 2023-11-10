import { zeroArray_10 } from "../../staticData/others";

export const globalStatistics = {
  online: zeroArray_10,
  offline: zeroArray_10,
};

// TO DO это статистика по каждому статусу online, а не суммарная.
const getCountOnlineUnits = globalStatistics.online;
export const getCountOnlineUnitsSelector = getCountOnlineUnits;

// TO DO это статистика по каждому статусу offline, а не суммарная.
const getCountOfflineUnits = globalStatistics.offline;
export const getCountOfflineUnitsSelector = getCountOfflineUnits;

// TO DO это общее кол-во unit.
export const getUnitCountSelector: any = [
  ...getCountOnlineUnits,
  ...getCountOfflineUnits
].reduce((prev: number, curr: number) => {
  let all: any = prev + curr;
  console.log("all: ", all)

  return all
})
