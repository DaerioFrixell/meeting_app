export enum Setting_E {
  LOADING = "loading",
  SET_PAGE = "setPage",
  SET_PAGE_ERROR = "setPageError",

}

type SettingLoading_T = {
  type: Setting_E.LOADING
}

export type SettingSetPage_T = {
  type: Setting_E.SET_PAGE,
  payload: number
}

export type SettingSetPageError_T = {
  type: Setting_E.SET_PAGE_ERROR,
  payload: string
}

export type SearchRequest_T = {
  limit: number,
  page: number,
}

export type SettingReducerInitState = {
  loading: boolean;
  searchRequest: SearchRequest_T
}

// ехпорт всех типов
export type SettingActions_T =
  | SettingLoading_T
  | SettingSetPage_T
  | SettingSetPageError_T
