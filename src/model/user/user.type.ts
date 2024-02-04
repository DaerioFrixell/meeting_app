import { StatisticByYear_T } from "../../types/V2/userApiV2.type";


export enum UserAction_E {
  LOADING = "loading",

  ONLINE_STAT = 'onlineStat',
  OFFLINE_STAT = 'onffineStat',

  GET_UNITS_COUNT = "getUnitsCount"
}

type ToLoadingAction_T = {
  type: UserAction_E.LOADING
}

type OnlineStatsAction_T = {
  type: UserAction_E.ONLINE_STAT
  payload: StatisticByYear_T[]
}

type OfflineStatsAction_T = {
  type: UserAction_E.OFFLINE_STAT
  payload: StatisticByYear_T[]
}

type getAllUnitsCountAction_T = {
  type: UserAction_E.GET_UNITS_COUNT,
  payload: number
}

export type UserActions =
  | OnlineStatsAction_T
  | OfflineStatsAction_T
  | ToLoadingAction_T
  | getAllUnitsCountAction_T