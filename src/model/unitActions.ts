import { Dispatch } from 'redux'
import { AddUnitType, UnitActions, UnitActionType } from './unitTypes'
import {
  createUnit,
  deleteUnit,
  getUnits,
  updateUnitRequest,
} from '../api/unitApi'

export const fetchFeedbacks = () => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      dispatch({ type: UnitActionType.FETCH_UNITS })

      const data = await getUnits()

      dispatch({
        type: UnitActionType.FETCH_UNITS_SUCCESS,
        payload: data,
      })
    } catch (e) {
      dispatch({
        type: UnitActionType.FETCH_UNITS_ERROR,
        payload: 'ошибка при загрузке units',
      })
    }
  }
}

export const addUnit = (unit: AddUnitType) => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      dispatch({ type: UnitActionType.FETCH_UNITS })

      const data = await createUnit(unit) // data: Unit с id и другими полями
      console.log('you create: ', data)

      dispatch({
        type: UnitActionType.ADD_UNITS,
        payload: data,
      })
    } catch (e) {
      dispatch({
        type: UnitActionType.FETCH_UNITS_ERROR,
        payload: 'ошибка при загрузке units',
      })
    }
  }
}

export const updateUnit = (unit: AddUnitType) => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      dispatch({ type: UnitActionType.FETCH_UNITS })

      const data = await updateUnitRequest(unit)
      console.log('updat fake data: ', data)
      // сделать обновление в редаксе или просто запросить всех Units
      dispatch({ type: UnitActionType.OFF_LOADING })
    } catch (e) {
      dispatch({
        type: UnitActionType.FETCH_UNITS_ERROR,
        payload: 'ошибка при загрузке units',
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
        payload: `ошибка при удалении ${e}`,
      })
    }
  }
}
