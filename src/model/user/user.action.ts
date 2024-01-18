import { Dispatch } from "react"
import { getCountUnitsForAllStatuses } from "../../api/statsApi";
import { UserAction_E, UserActions } from "./user.type";
import { getUnitsCountRequest } from "../../api/user.api";

export const getCountUnitsForAllStatusesRequest = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const data = await getCountUnitsForAllStatuses();

      dispatch({
        type: UserAction_E.INIT_STATS,
        payload: data,
      })
    } catch (e) {
      console.log("stats error")
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
      console.log("counts error", e)
    }
  }
}