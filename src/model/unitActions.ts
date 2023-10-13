import { Dispatch } from 'redux'
import { AddUnitType, UnitActions, UnitActionType } from './unitTypes'
import {
  createUnit,
  deleteUnit,
  getUnits,
  updateUnitRequest,
} from '../api/unitApi'
import { UpdateUnit } from '../Data/Unit'

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

export const updateUnit = (updateUnit: UpdateUnit) => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      // dispatch({ type: UnitActionType.FETCH_UNITS })
      console.log('payload for redux: ', updateUnit)
      // const data = await updateUnitRequest(unit)

      /** TO DO
       * сделать обновление в редаксе
       * запросить всех Units
       * */

      dispatch({
        type: UnitActionType.UPDATE_UNIT,
        payload: updateUnit,
      })
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
