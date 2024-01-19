import { UnitUpdateV1, UnitV1 } from '../Data/UnitV1'

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

// DO: исправить на enum название через ..._T;
export type FetchUnitAction = {
  type: UnitAction_E.FETCH_UNITS
}

// DO: исправить на enum название через ..._T;
export type OffFetchUnitAction = {
  type: UnitAction_E.OFF_LOADING
}

// DO: исправить на enum название через ..._T;
export type FetchUnitSuccessAction = {
  type: UnitAction_E.FETCH_UNITS_SUCCESS
  payload: UnitV1[]
}

// DO: исправить на enum название через ..._T;
export type FetchUnitErrorAction = {
  type: UnitAction_E.FETCH_UNITS_ERROR
  payload: string
}

// DO: исправить на enum название через ..._T;
export type AddUnitsAction = {
  type: UnitAction_E.ADD_UNITS
  payload: UnitV1
}

// DO: исправить на enum название через ..._T;
export type DeleteUnitAction_T = {
  type: UnitAction_E.DELETE_UNITS
  payload: number
}

// DO: исправить на enum название через ..._T;
export type DeleteUnitErrorAction = {
  type: UnitAction_E.DELETE_UNITS_ERROR
  payload: string
}

// DO: исправить на enum название через ..._T;
export type UpdateUnitAction = {
  type: UnitAction_E.UPDATE_UNIT
  payload: UnitUpdateV1
}

// DO: исправить на enum название через ..._T;
export type UnitActions =
  | OffFetchUnitAction
  | FetchUnitAction
  | FetchUnitSuccessAction
  | FetchUnitErrorAction
  | AddUnitsAction
  | DeleteUnitAction_T
  | DeleteUnitErrorAction
  | UpdateUnitAction