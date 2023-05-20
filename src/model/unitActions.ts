import { Dispatch } from "redux"
import axios from "axios"
import { AddUnitType, UnitActions, UnitActionType } from "./unitTypes";
import { createUnit, deleteUnit } from "../api/unitApi";

export const fetchFeedbacks = () => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      dispatch({ type: UnitActionType.FETCH_UNITS })

      const response = await axios.get("http://localhost:5000/api/unit")
      dispatch({
        type: UnitActionType.FETCH_UNITS_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: UnitActionType.FETCH_UNITS_ERROR,
        payload: "ошибка при загрузке units"
      })
    }
  }
}

export const addUnit = (unit: AddUnitType) => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      // dispatch({ type: UnitActionType.FETCH_UNITS })
      createUnit(unit)

      dispatch({
        type: UnitActionType.ADD_UNITS, payload: unit
      })
    } catch (e) {
      dispatch({
        type: UnitActionType.FETCH_UNITS_ERROR,
        payload: "ошибка при загрузке units"
      })
    }
  }
}

export const deleteUnitAction = (id: number) => {
  console.log(id)
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      deleteUnit(id)
    } catch (e) {
      dispatch({
        type: UnitActionType.DELETE_UNITS_ERROR,
        payload: `ошибка при удалении ${e}`
      })
    }
  }
}
