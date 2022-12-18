import { Dispatch } from "redux"
import axios from "axios"
import type { } from 'redux-thunk/extend-redux';
import { UnitActions, UnitActionType } from "./unitTypes";

export const fetchFeedbacks = () => {

  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      dispatch({ type: UnitActionType.FETCH_UNITS })
      const response = await axios.get("http://localhost:5000/api/unit")
      setTimeout(() => {
        dispatch({
          type: UnitActionType.FETCH_UNITS_SUCCESS,
          payload: response.data
        })

      }, 500)


    } catch (e) {
      dispatch({
        type: UnitActionType.FETCH_UNITS_ERROR,
        payload: "ошибка при загрузке units"
      })
    }
  }
}
