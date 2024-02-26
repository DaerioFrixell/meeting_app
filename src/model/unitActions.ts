import { Dispatch } from 'redux';
import { UnitActions_T, UnitAction_E } from './unitTypes';
import {
  createUnitRequest,
  deleteUnitRequest,
  getUnitsRequest,
  updateUnitRequest,
} from '../api/unit.api';
import { fakeUnitsV1 } from '../mocdb/mocdb';
import { UnitCreateV1, UnitUpdateV1, UnitV1 } from '../types/UnitV1';
import { SearchRequest_T } from './settings/setting.type';


// TO DO: переместить в папку ./Unit
/**
 * Получает пагинированный список Units.
 */
export const getUnitsPart = (counts: SearchRequest_T) => {
  return async (dispatch: Dispatch<UnitActions_T>) => {
    try {
      const units = await getUnitsRequest(counts);

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

/**
 * Получает фейковый список Units.
 */
export const getAllUnitsFake = () => {
  return async (dispatch: Dispatch<UnitActions_T>) => {
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

/**
 * Отправляет запрос на создание Unit в БД.
 * 
 * Запускает добавление Unit в Store.
 */
export const createUnitV1 = (unit: UnitCreateV1) => {
  return async (dispatch: Dispatch<UnitActions_T>) => {
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

/**
 * Отправляет запрос на обновление выбранного Unit в БД.
 * 
 * Обнавляет выбранный Unit в Store.
 */
export const updateUnit = (updateUnit: UnitUpdateV1) => {
  return async (dispatch: Dispatch<UnitActions_T>) => {
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

/**
 * Отправляет запрос на удаление Unit в БД по Id.
 * 
 * Удаляет Unit из Store.
 */
export const deleteUnit = (id: number) => {
  return async (dispatch: Dispatch<UnitActions_T>) => {
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
