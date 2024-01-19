import { Dispatch } from 'redux'
import { UnitActions, UnitAction_E } from './unitTypes'
import {
  createUnitRequest,
  deleteUnitRequest,
  getUnitsRequest,
  updateUnitRequest,
} from '../api/unitApi'
import { fakeUnitsV1 } from '../mocdb/mocdb'
import { UnitCreateV1, UnitUpdateV1, UnitV1 } from '../Data/UnitV1'
import { SearchRequest_T } from './settings/setting.type'

export const getUnitsPart = (counts: SearchRequest_T) => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      const units = await getUnitsRequest(counts)

      dispatch({
        type: UnitAction_E.FETCH_UNITS_SUCCESS,
        payload: units,
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
      const data: UnitV1 = await createUnitRequest(unit)

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
      const unitAfterUpdate = await updateUnitRequest(updateUnit)

      dispatch({
        type: UnitAction_E.UPDATE_UNIT,
        payload: unitAfterUpdate,
      })
    } catch (e) {
      dispatch({
        type: UnitAction_E.FETCH_UNITS_ERROR,
        payload: 'ошибка при загрузке units',
      })
    }
  }
}

export const deleteUnit = (id: number) => {
  return async (dispatch: Dispatch<UnitActions>) => {
    try {
      deleteUnitRequest(id);

      dispatch({
        type: UnitAction_E.DELETE_UNITS,
        payload: id,
      })
    } catch (e) {
      dispatch({
        type: UnitAction_E.DELETE_UNITS_ERROR,
        payload: `ошибка при удалении ${e}`,
      })
    }
  }
}
