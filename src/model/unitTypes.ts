export type InitState = {
  units: any[],
  isLoading: boolean,
  error: null | string
}

export type UnitType = {
  id: number
  status: string | null,
  name: string,
  surname: string,
  wasOld: number,
  dateMeet: string,
  link: string,
  whereMeet: string,
  typeMeet: "live" | "ether"
}

export enum UnitActionType {
  FETCH_UNITS = "FETCH_UNITS",
  FETCH_UNITS_SUCCESS = "FETCH_UNITS_SUCCESS",
  FETCH_UNITS_ERROR = "FETCH_UNITS_ERROR",
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

export type UnitActions =
  FetchUnitAction
  | FetchUnitSuccessAction
  | FetchUnitErrorAction
