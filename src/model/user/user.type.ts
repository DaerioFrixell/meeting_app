import { StatusMark } from "../../types/statuses";

/** Возможно, стоит попробовать сделать общий загрузочник.
 * И его во всех Reducers использовать при фетче данных. 
 */
export enum UserAction_E {
  LOADING = "loading",
  INIT_STATS = "initStats",

  ONLINE_STAT = 'onlineStat',
  OFFLINE_STAT = 'onffineStat',

  GET_UNITS_COUNT = "getUnitsCount"
}

export type StatisticByYear_T = {
  status: StatusMark,
  value: number
}
// V2: в статусе в итоге должно быть: описание для подсказок при наведении, краткий статус, значение. Вынести в папку type нужно по идее, т.к. это тип глобальный.
export type getStatisticByYear_T = {
  offlineStat: StatisticByYear_T[]
  onlineStat: StatisticByYear_T[]
};

export type ToLoading = {
  type: UserAction_E.LOADING
}

export type OnlineStatsAction = {
  type: UserAction_E.ONLINE_STAT
  payload: StatisticByYear_T[]
}

export type OfflineStatsAction = {
  type: UserAction_E.OFFLINE_STAT
  payload: StatisticByYear_T[]
}

type getAllUnitsCount_T = {
  type: UserAction_E.GET_UNITS_COUNT,
  payload: number
}

export type UserActions =
  | OnlineStatsAction
  | OfflineStatsAction
  | ToLoading
  | getAllUnitsCount_T