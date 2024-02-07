import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";
import { UserState } from "./user.reducer";
import { StatusMark } from "../../types/statuses";
import { StatisticByYear_T } from "../../types/V2/userApiV2.type";

/** Функция для суммирования всех Units в статус <Contact> */
const getAllValueByStatusC = (arr: StatisticByYear_T[]) => {
  const mutableArr = arr;

  let accum = 0;
  // суммирую value статусов, которые не равны C || D
  mutableArr.forEach(el => {
    if (el.status !== StatusMark.C && el.status !== StatusMark.D) {
      accum += el.value
    }
  })

  // складываю это значение в статус C
  mutableArr.forEach(el => {
    if (el.status === StatusMark.C) {
      el.value = accum
    }
  })

  return mutableArr;
}

const getUserState = (state: RootState): UserState => state.user;

/*
 * значения по каждому статусу online
 */
export const getOnlineStatistics = createSelector(getUserState, (userState: UserState) => {
  const statisticsArray = userState.statistics.onlineStat;
  const statAfterCalc = getAllValueByStatusC(statisticsArray);

  return statAfterCalc
})

export const getOfflineStatistics = createSelector(getUserState, (userState: UserState) => {
  const statisticsArray = userState.statistics.offlineStat;
  const statAfterCalc = getAllValueByStatusC(statisticsArray);

  return statAfterCalc
})

/** цель на год */
export const getCountAllUnitsGoalSelector = (): number => {
  let number = 500;

  return number
};

export const countUnitsSelector = createSelector(getUserState, (unitState: UserState) => {
  // console.log(unitState.statistics.unitsCount)
  return unitState.statistics.unitsCount;
});