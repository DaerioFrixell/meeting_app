import { InitState, UnitActions, UnitActionType } from "./unitTypes"

const initialState: InitState = {
  units: [],
  isLoading: false,
  error: null
}

export const unitReducer = (state = initialState, action: UnitActions): InitState => {
  switch (action.type) {
    case UnitActionType.FETCH_UNITS:
      return { isLoading: true, error: null, units: [] }

    case UnitActionType.FETCH_UNITS_SUCCESS:
      return { isLoading: false, error: null, units: action.payload }

    case UnitActionType.FETCH_UNITS_ERROR:
      return { isLoading: false, error: "ошибка загрузки юнитов", units: [] }

    default: return state
  }

}