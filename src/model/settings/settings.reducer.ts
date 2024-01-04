import { SettingActions_T, SettingReducerInitState, Setting_E, } from "./setting.type"

const initialState: SettingReducerInitState = {
  loading: false,
  searchRequest: {
    limit: 15,
    page: 1
  }
}

/**
 * Настройки приложения
 */
export const settingReducer = (state = initialState, action: SettingActions_T): SettingReducerInitState => {
  switch (action.type) {
    case Setting_E.SET_PAGE:
      console.log("payload: ", action.payload)
      return {
        ...state,
        searchRequest: {
          limit: 15,
          page: action.payload
        }
      }

    default:
      return state
  }
}
