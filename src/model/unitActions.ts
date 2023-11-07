import { Dispatch } from 'redux'
import { AddUnitType, UnitActions, UnitActionType } from './unitTypes'
import {
  createUnit,
  deleteUnit,
  getUnits,
  updateUnitRequest,
} from '../api/unitApi'
import { UnitV1, UpdateUnit } from '../Data/Unit'
import { fakeUnits } from '../mocdb/mocdb'


/**
 * получение всех Unit без пагинации
 */
export const fetchFeedbacks = () => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      dispatch({ type: UnitActionType.FETCH_UNITS })

      // здесь получаются Unit с id/датой создания/e.t.c, это другой тип
      const data: UnitV1[] = await getUnits()

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

/**
 * получение всех моковых Unit без пагинации
 */
export const getFakeData = () => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      dispatch({ type: UnitActionType.FETCH_UNITS })

      const data: UnitV1[] = fakeUnits

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

/**
 * создание нового Unit
 */
export const addUnit = (unit: AddUnitType) => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      // dispatch({ type: UnitActionType.FETCH_UNITS })

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

/**
 * обновление выбранного Unit
 */
export const updateUnit = (updateUnit: UpdateUnit) => {
  console.log('updateUnit action work')
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      // dispatch({ type: UnitActionType.FETCH_UNITS })
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

/**
 * удаление выбранного Unit
 */
export const deleteUnitAction = (id: number) => {
  console.log('delete action work')
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
