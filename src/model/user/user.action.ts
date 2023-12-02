import { Dispatch } from "react"
import { getCountUnitsForAllStatuses } from "../../api/statsApi";
import { UserAction_E, UserActions } from "./user.type";


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