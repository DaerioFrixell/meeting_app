import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";
import { zeroArray_10 } from "../../staticData/others";
import { UserState } from "./user.reducer";

export const globalStatistics = {
  online: zeroArray_10,
  offline: zeroArray_10,
};

const getUserState = (state: RootState): UserState => state.user;

/*
 * значения по каждому статусу online
 */
export const getOnlineStatistics = createSelector(getUserState, (userState: UserState) => {
  const statisticsArray = userState.statistics.onlineStat;

  // let accum = 0;

  // суммирую value статусов, чтобы прибавить это значение в статус StatusMark.C
  // statisticsArray.forEach(el => {
  //   if (el.status !== StatusMark.C && el.status !== StatusMark.D) {
  //     accum += el.value
  //   }
  // })

  // statisticsArray.forEach(el => {
  //   if (el.status === StatusMark.C) {
  //     el.value += accum
  //   }
  // })

  return statisticsArray
})

export const getOfflineStatistics = createSelector(getUserState, (userState: UserState) => {
  const statisticsArray = userState.statistics.offlineStat;
  // TO DO: если стату != D и != C, то добавлять это значение к статусу C
  // let accum = 0;

  // суммирую value статусов, чтобы прибавить это значение в статус StatusMark.C
  // statisticsArray.forEach(el => {
  //   if (el.status !== StatusMark.C && el.status !== StatusMark.D) {
  //     accum += el.value
  //   }
  // })

  // statisticsArray.forEach(el => {
  //   if (el.status === StatusMark.C) {
  //     el.value += accum
  //   }
  // })

  return statisticsArray
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