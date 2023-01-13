export type InitState = {
  isLoading: boolean,
  error: null | string,
  units: any[]
}

export type UnitType = {
  status: string | null,
  name: string,
  surname: string,
  wasOld: number,
  dateMeet: string,
  link: string,
  whereMeet: string,
  typeMeet: "live" | "ether"
}

export type AddUnitType = {
  status: string | null,
  name: string,
  surname: string,
  wasOld: number | "none",
  dateMeet: string,
  link: string,
  whereMeet: string,
  typeMeet: string
}

export enum UnitActionType {
  FETCH_UNITS = "FETCH_UNITS",
  FETCH_UNITS_SUCCESS = "FETCH_UNITS_SUCCESS",
  FETCH_UNITS_ERROR = "FETCH_UNITS_ERROR",
  ADD_UNITS = "ADD_UNITS"
}

export type FetchUnitAction = {
  type: UnitActionType.FETCH_UNITS
}

export type FetchUnitSuccessAction = {
  type: UnitActionType.FETCH_UNITS_SUCCESS
  payload: InitState[]
}

export type FetchUnitErrorAction = {
  type: UnitActionType.FETCH_UNITS_ERROR
  payload: string
}

export type addUnitsAction = {
  type: UnitActionType.ADD_UNITS,
  payload: AddUnitType
}

export type UnitActions =
  FetchUnitAction
  | FetchUnitSuccessAction
  | FetchUnitErrorAction
  | addUnitsAction
