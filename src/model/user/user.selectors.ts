import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";
import { zeroArray_10 } from "../../staticData/others";
import { UserState } from "./user.reducer";
import { StatusMark } from "../../Data/statuses";

export const globalStatistics = {
  online: zeroArray_10,
  offline: zeroArray_10,
};

const getUserState = (state: RootState): UserState => state.user;

/*
 * значения по каждому статусу online
 */
export const getStatisticsSelector = createSelector(getUserState, (userState: UserState) => {
  const statisticsArray = userState.statistics.statuses;
  let accum = 0;

  // суммирую value статусов, чтобы прибавить это значение в статус StatusMark.C
  statisticsArray.forEach(el => {
    if (el.status !== StatusMark.C && el.status !== StatusMark.D) {
      accum += el.value
    }
  })

  statisticsArray.forEach(el => {
    if (el.status === StatusMark.C) {
      el.value += accum
    }
  })

  return statisticsArray
})

const getCountByEveryOnline = [1, 2]
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
export const getCountAllUnitsGoalSelector = (): number => {
  let number = 500;

  return number
};

export const countUnitsSelector = createSelector(getUserState, (unitState: UserState) => {
  // console.log(unitState.statistics.unitsCount)
  return unitState.statistics.unitsCount;
});