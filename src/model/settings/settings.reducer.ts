import { SettingActions_T, SettingState_T, Setting_E, } from "./setting.type"


const initialState: SettingState_T = {
  loading: false,
  isAuth: false,
  searchRequest: {
    limit: 15,
    page: 1
  }
}

/**
 * Настройки приложения
 */
export const settingReducer = (state = initialState, action: SettingActions_T): SettingState_T => {
  switch (action.type) {
    case Setting_E.ON_LOADING:
      return {
        ...state,
        loading: true
      }

    case Setting_E.OFF_LOADING:
      return {
        ...state,
        loading: false
      }

    case Setting_E.SET_PAGE:
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
