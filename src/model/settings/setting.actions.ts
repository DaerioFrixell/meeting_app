import { Dispatch } from "react"
import { SettingActions_T, Setting_E } from "./setting.type"
import { token } from "./setting.static"

// TO DO: в пагинации страницы должны менятьсья редьюсером, а не локальным стейтом.
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

/** Добавить токен token */
export const settingLogIn = () => {
  return async (dispatch: Dispatch<SettingActions_T>) => {
    try {
      dispatch({ type: Setting_E.ON_LOADING });

      // TO DO: отправлять запрос в бэк на создание токена
      localStorage.setItem(token, "fakeToken");

      dispatch({ type: Setting_E.OFF_LOADING });

    } catch (e) {
      console.log(`ошибка в фронте в <logIn>`, e);
    }
  }
}

/** Удалить token */
export const settingLogOut = () => {
  return async (dispatch: Dispatch<SettingActions_T>) => {
    try {
      dispatch({ type: Setting_E.ON_LOADING });

      localStorage.removeItem(token);

      dispatch({ type: Setting_E.OFF_LOADING });
    } catch (e) {
      console.log(`ошибка в фронте в <logOut>`, e);
    }
  }
}