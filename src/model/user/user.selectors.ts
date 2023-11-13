import { zeroArray_10 } from "../../staticData/others";

export const globalStatistics = {
  online: zeroArray_10,
  offline: zeroArray_10,
};

/** значения по каждому статусу online */
const getCountByEveryOnline: number[] = globalStatistics.online;
export const getCountOnlineUnitsSelector = getCountByEveryOnline;

/** значения по каждому статусу offline */
const getCountByEveryOffline: number[] = globalStatistics.offline;
export const getCountOfflineUnitsSelector = getCountByEveryOffline;

const countAllUnitsSelector: number[] = [
  ...getCountByEveryOnline,
  ...getCountByEveryOffline
];

export const getCountAllUnitsSelector: number = countAllUnitsSelector.reduce(
  (sum: number, current: number) => sum + current, 0
);

/** цель на год */
export const getCountAllUnitsGoalSelector: number = 500;
