import { getStatisticByYear } from "../../api/statsApi";
import { UserAction_E, UserActions } from "./user.type";
import { getUnitsCountRequest } from "../../api/user.api";
import { Dispatch } from "redux";
import { AxiosError } from "axios";

// TO DO: вынести в файлик все магические строки
const networkError = `Нет доступа к сети или к бэку`;

// TO DO: сделать функцию для обработки ошибок, а не хардкодить одно и то же в catch.
export const getStatisticByYearRequest = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const val1 = 2018;
      const val10 = "за всё время";

      const { offlineStat, onlineStat } = await getStatisticByYear(val10);

      dispatch({
        type: UserAction_E.ONLINE_STAT,
        payload: onlineStat,
      })

      dispatch({
        type: UserAction_E.OFFLINE_STAT,
        payload: offlineStat,
      })
    } catch (e) {
      const err = e as AxiosError;

      switch (err.code) {
        case AxiosError.ERR_BAD_REQUEST: return console.warn(
          `Ошибочный url в <getCountUnitsForAllStatusesRequest>.\n Проверь правильность url: `,
          err
        );

        case (AxiosError.ERR_NETWORK): return console.warn(
          networkError
        );

        default: return console.warn(
          `Необработанная ошибка в <getCountUnitsForAllStatuses>. \n Error is: `, e
        );
      }
    }
  }
}

export const getUnitsCount = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const unitsCount = await getUnitsCountRequest();

      dispatch({
        type: UserAction_E.GET_UNITS_COUNT,
        payload: unitsCount,
      })

    } catch (e) {
      const err = e as AxiosError;

      switch (err.code) {
        case AxiosError.ERR_BAD_REQUEST: return console.warn(
          `Ошибочный url в <getUnitsCount>. \n Проверь правильность url'a: `, err
        );

        case (AxiosError.ERR_NETWORK): return console.warn(
          networkError
        );

        default: return console.warn(
          `Необработанная ошибка в <getUnitsCount>. \n Error is: `, e
        );
      }
    }
  }
}