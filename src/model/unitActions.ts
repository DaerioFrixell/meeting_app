import { Dispatch } from 'redux'
import { AddUnitType, UnitActions, UnitActionType } from './unitTypes'
import {
  createUnit,
  deleteUnit,
  getUnits,
  updateUnitRequest,
} from '../api/unitApi'
import { UpdateUnit } from '../Data/Unit'
import { fakeUnits } from '../mocdb/mocdb'

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

export const getFakeData = () => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      dispatch({ type: UnitActionType.FETCH_UNITS })

      const data: any = fakeUnits

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
      dispatch({ type: UnitActionType.FETCH_UNITS })
      const data = await updateUnitRequest(updateUnit)

      dispatch({
        type: UnitActionType.UPDATE_UNIT,
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

export const deleteUnitAction = (id: number) => {
  console.log(id)
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      deleteUnit(id)
      /**TO DO
       * удалить объект в редаксе, чтобы изменить UI!
       *
       */
    } catch (e) {
      dispatch({
        type: UnitActionType.DELETE_UNITS_ERROR,
        payload: `ошибка при удалении ${e}`,
      })
    }
  }
}
