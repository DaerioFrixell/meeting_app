import { Dispatch } from 'redux'
import { UnitActions, UnitAction_E } from './unitTypes'
import {
  createUnit,

  deleteUnit,
  getUnits,
  updateUnitRequest,
} from '../api/unitApi'
import { fakeUnitsV1 } from '../mocdb/mocdb'
import { UnitCreateV1, UnitUpdateV1, UnitV1 } from '../Data/UnitV1'
import { SearchRequest_T } from './settings/setting.type'

export const getAllUnits = (counts: SearchRequest_T) => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      const data = await getUnits(counts)
      console.log(counts)

      dispatch({
        type: UnitAction_E.FETCH_UNITS_SUCCESS,
        payload: data,
      })
    } catch (e) {
      dispatch({
        type: UnitAction_E.FETCH_UNITS_ERROR,
        payload: 'ошибка при загрузке units',
      })
    }
  }
}

export const getAllUnitsFake = () => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      dispatch({ type: UnitAction_E.FETCH_UNITS })

      const data: UnitV1[] = fakeUnitsV1

      dispatch({
        type: UnitAction_E.FETCH_UNITS_SUCCESS,
        payload: data,
      })
    } catch (e) {
      dispatch({
        type: UnitAction_E.FETCH_UNITS_ERROR,
        payload: 'ошибка при загрузке units',
      })
    }
  }
}

export const createUnitV1 = (unit: UnitCreateV1) => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      // dispatch({ type: UnitAction_E.FETCH_UNITS })

      const data: UnitV1 = await createUnit(unit)

      dispatch({
        type: UnitAction_E.ADD_UNITS,
        payload: data,
      })
    } catch (e) {
      dispatch({
        type: UnitAction_E.FETCH_UNITS_ERROR,
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
        type: UnitAction_E.UPDATE_UNIT,
        payload: data.newUnit,
      })
    } catch (e) {
      dispatch({
        type: UnitAction_E.FETCH_UNITS_ERROR,
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
      /** DO
       * удалить объект в редаксе, чтобы изменить UI!
       *
       */
    } catch (e) {
      dispatch({
        type: UnitAction_E.DELETE_UNITS_ERROR,
        payload: `ошибка при удалении ${e}`,
      })
    }
  }
}
