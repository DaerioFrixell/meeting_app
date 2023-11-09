import { UnitUpdateV1, UnitV1 } from '../Data/UnitV1'

export type UnitInitState = {
  isLoading: boolean
  error: null | string
  units: UnitV1[]
}

export type AddUnitType = {
  status: string | null
  name: string
  surname: string
  wasOld: number | 'none'
  dateMeet: string
  link: string | null
  vk: string | null
  inst: string | null
  telegram: string | null
  whereMeet: string
  typeMeet: string
}

export enum UnitActionType {
  FETCH_UNITS = 'FETCH_UNITS',
  FETCH_UNITS_SUCCESS = 'FETCH_UNITS_SUCCESS',
  FETCH_UNITS_ERROR = 'FETCH_UNITS_ERROR',

  OFF_LOADING = 'OFF_LOADING',

  ADD_UNITS = 'ADD_UNITS',

  UPDATE_UNIT = 'UPDATE_UNIT',

  DELETE_UNITS = 'DELETE_UNITS',
  DELETE_UNITS_ERROR = 'DELETE_UNITS_ERROR',
}

export type FetchUnitAction = {
  type: UnitActionType.FETCH_UNITS
}

export type OffFetchUnitAction = {
  type: UnitActionType.OFF_LOADING
}

export type FetchUnitSuccessAction = {
  type: UnitActionType.FETCH_UNITS_SUCCESS
  payload: any[]
}

export type FetchUnitErrorAction = {
  type: UnitActionType.FETCH_UNITS_ERROR
  payload: string
}

export type AddUnitsAction = {
  type: UnitActionType.ADD_UNITS
  payload: UnitV1
}

export type DeleteUnitAction = {
  type: UnitActionType.DELETE_UNITS
}

export type DeleteUnitErrorAction = {
  type: UnitActionType.DELETE_UNITS_ERROR
  payload: string
}

export type UpdateUnitAction = {
  type: UnitActionType.UPDATE_UNIT
  payload: UnitUpdateV1
}

export type UnitActions =
  | OffFetchUnitAction
  | FetchUnitAction
  | FetchUnitSuccessAction
  | FetchUnitErrorAction
  | AddUnitsAction
  | DeleteUnitAction
  | DeleteUnitErrorAction
  | UpdateUnitAction