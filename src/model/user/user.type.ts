/** Возможно, стоит попробовать сделать общий загрузочник.
 * И его во всех Reducers использовать при фетче данных. 
 */
export enum UserAction_E {
  LOADING = "loading",
  INIT_STATS = "initStats",
}

// DO - типизировать перед ПР!
export type GetUserStatsAction = {
  type: UserAction_E.INIT_STATS
  payload: any[] // массив с названием статусов и количеством
}

export type ToLoading = {
  type: UserAction_E.LOADING
}

export type UserActions =
  | GetUserStatsAction
  | ToLoading