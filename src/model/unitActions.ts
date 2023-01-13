import { Dispatch } from "redux"
import axios from "axios"
import { AddUnitType, UnitActions, UnitActionType } from "./unitTypes";
import { createUnit } from "../api/unitApi";

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
      dispatch({ type: UnitActionType.FETCH_UNITS })
      createUnit({
        status: unit.status,
        name: unit.name,
        surname: unit.surname,
        wasOld: unit.wasOld,
        dateMeet: unit.dateMeet,
        link: unit.link,
        whereMeet: unit.whereMeet,
        typeMeet: unit.typeMeet
      })
      dispatch({
        type: UnitActionType.ADD_UNITS, payload: {
          status: unit.status,
          name: unit.name,
          surname: unit.surname,
          wasOld: unit.wasOld,
          dateMeet: unit.dateMeet,
          link: unit.link,
          whereMeet: unit.whereMeet,
          typeMeet: unit.typeMeet
        }
      })
    } catch (e) {
      dispatch({
        type: UnitActionType.FETCH_UNITS_ERROR,
        payload: "ошибка при загрузке units"
      })
    }
  }
}
