import { Dispatch } from 'redux'
import { UnitActions, UnitActionType } from './unitTypes'
import {
  createUnit,
  deleteUnit,
  getUnits,
  updateUnitRequest,
} from '../api/unitApi'
import { fakeUnitsV1 } from '../mocdb/mocdb'
import { UnitCreateV1, UnitUpdateV1, UnitV1 } from '../Data/UnitV1'
import { requestPaginationSetting_T } from '../middleware/requestPaginationSetting'

export const getAllUnits = (counts: requestPaginationSetting_T) => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      const data = await getUnits(counts)

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

export const getAllUnitsFake = () => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      dispatch({ type: UnitActionType.FETCH_UNITS })

      const data: UnitV1[] = fakeUnitsV1

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

export const createUnitV1 = (unit: UnitCreateV1) => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      // dispatch({ type: UnitActionType.FETCH_UNITS })

      /** TO DO перекидывать на список Units после добавления! */
      const data: UnitV1 = await createUnit(unit)
      console.log("data: ", data)


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

export const updateUnit = (updateUnit: UnitUpdateV1) => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      // { status: number, newUnit: {} }
      const data = await updateUnitRequest(updateUnit)

      dispatch({
        type: UnitActionType.UPDATE_UNIT,
        payload: data.newUnit,
      })
    } catch (e) {
      dispatch({
        type: UnitActionType.FETCH_UNITS_ERROR,
        payload: 'ошибка при загрузке units',
      })
    }
  }
}

export const deleteUnitAction = (id: string | undefined) => {
  console.log('delete action work')
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      id ? deleteUnit(id) : console.log(`неверный id. Now is = ${id}`)
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
