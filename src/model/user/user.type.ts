/** Возможно, стоит попробовать сделать общий загрузочник.
 * И его во всех Reducers использовать при фетче данных. 
 */
export enum UserAction_E {
  LOADING = "loading",
  INIT_STATS = "initStats",

  GET_UNITS_COUNT = "getUnitsCount"
}

export type ToLoading = {
  type: UserAction_E.LOADING
}

// DO - типизировать перед ПР!
export type GetUserStatsAction = {
  type: UserAction_E.INIT_STATS
  payload: any[] // массив с названием статусов и количеством
}

type getAllUnitsCount_T = {
  type: UserAction_E.GET_UNITS_COUNT,
  payload: number
}

export type UserActions =
  | GetUserStatsAction
  | ToLoading
  | getAllUnitsCount_T