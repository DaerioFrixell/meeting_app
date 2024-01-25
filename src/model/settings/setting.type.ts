export enum Setting_E {
  ON_LOADING = "onLoading",
  OFF_LOADING = "offLoading",

  SET_PAGE = "setPage",
  SET_PAGE_ERROR = "setPageError",

  CHECK_AUTH = "checkAuth",
  LOG_IN = "logIn",
  LOG_OUT = "logOut",
}

// V2: поч это здесь?
export type SearchRequest_T = {
  limit: number
  page: number
}

export type SettingState_T = {
  loading: boolean
  isAuth: boolean
  searchRequest: SearchRequest_T
}

export type SettingOnLoadingAction_T = {
  type: Setting_E.ON_LOADING
  payload: boolean
}

export type SettingOffLoadingAction_T = {
  type: Setting_E.OFF_LOADING
  payload: boolean
}

export type SettingCheckAuthAction_T = {
  type: Setting_E.CHECK_AUTH
}

export type SettingLogInAction_T = {
  type: Setting_E.LOG_IN
  payload: boolean
}

export type SettingLogOutAction_T = {
  type: Setting_E.LOG_OUT
  payload: boolean
}

export type SettingSetPageAction_T = {
  type: Setting_E.SET_PAGE,
  payload: number
}

export type SettingSetPageErrorAction_T = {
  type: Setting_E.SET_PAGE_ERROR,
  payload: string
}

export type SettingActions_T =
  | SettingOnLoadingAction_T
  | SettingOffLoadingAction_T

  | SettingCheckAuthAction_T
  | SettingLogInAction_T
  | SettingLogOutAction_T

  | SettingSetPageAction_T
  | SettingSetPageErrorAction_T
