import { UnitUpdateV1, UnitV1 } from '../types/UnitV1'


// TO DO: переместить в папку ./Unit
export type UnitInitState_T = {
  isLoading: boolean
  error: null | string
  units: UnitV1[]
}

export enum UnitAction_E {
  FETCH_UNITS = 'FETCH_UNITS',
  FETCH_UNITS_SUCCESS = 'FETCH_UNITS_SUCCESS',
  FETCH_UNITS_ERROR = 'FETCH_UNITS_ERROR',

  OFF_LOADING = 'OFF_LOADING',

  ADD_UNITS = 'ADD_UNITS',

  UPDATE_UNIT = 'UPDATE_UNIT',

  DELETE_UNITS = 'DELETE_UNITS',
  DELETE_UNITS_ERROR = 'DELETE_UNITS_ERROR',
}

export type FetchUnitAction_T = {
  type: UnitAction_E.FETCH_UNITS
}

export type OffFetchUnitAction_T = {
  type: UnitAction_E.OFF_LOADING
}

export type FetchUnitSuccessAction_T = {
  type: UnitAction_E.FETCH_UNITS_SUCCESS
  payload: UnitV1[]
}

export type FetchUnitErrorAction_T = {
  type: UnitAction_E.FETCH_UNITS_ERROR
  payload: string
}

export type AddUnitsAction_T = {
  type: UnitAction_E.ADD_UNITS
  payload: UnitV1
}

export type DeleteUnitAction_T = {
  type: UnitAction_E.DELETE_UNITS
  payload: number
}

export type DeleteUnitErrorAction_T = {
  type: UnitAction_E.DELETE_UNITS_ERROR
  payload: string
}

export type UpdateUnitAction_T = {
  type: UnitAction_E.UPDATE_UNIT
  payload: UnitUpdateV1
}

export type UnitActions_T =
  | OffFetchUnitAction_T
  | FetchUnitAction_T
  | FetchUnitSuccessAction_T
  | FetchUnitErrorAction_T
  | AddUnitsAction_T
  | DeleteUnitAction_T
  | DeleteUnitErrorAction_T
  | UpdateUnitAction_T