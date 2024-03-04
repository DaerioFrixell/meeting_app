import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";
import { UserState } from "./user.reducer";
import { calcNotPrimalValueByStatus } from "../../middleware/calculationMethods";


const getUserState = (state: RootState): UserState => state.user;

/**
 * Значения по каждому статусу online
 */
export const getOnlineStatistics = createSelector(getUserState, (userState: UserState) => {
  const statisticsArray = userState.statistics.onlineStat;
  const statAfterCalc = calcNotPrimalValueByStatus(statisticsArray);

  return statAfterCalc
})

/**
 * Значения по каждому статусу offline
 */
export const getOfflineStatistics = createSelector(getUserState, (userState: UserState) => {
  const statisticsArray = userState.statistics.offlineStat;
  const statAfterCalc = calcNotPrimalValueByStatus(statisticsArray);

  return statAfterCalc
})

/**
 * Общее количество Unit
 */
export const unitsCountSelector = createSelector(getUserState, (userState: UserState) => {
  return userState.statistics.unitsCount;
});