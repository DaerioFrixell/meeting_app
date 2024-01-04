import { Dispatch } from "react"
import { SettingActions_T, Setting_E } from "./setting.type"

export const changePage = (page: number) => {
  return async (dispatch: Dispatch<SettingActions_T>) => {
    try {
      dispatch({
        type: Setting_E.SET_PAGE,
        payload: page,
      })
    } catch (e) {
      dispatch({
        type: Setting_E.SET_PAGE_ERROR,
        payload: "Возникла ошибка в пагинации",
      })
    }
  }
}
