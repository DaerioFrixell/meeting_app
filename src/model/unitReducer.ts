import { InitState, UnitActions, UnitActionType } from "./unitTypes"

const initialState: InitState = {
  isLoading: false,
  error: null,
  units: []
}

export const unitReducer = (state = initialState, action: UnitActions): InitState => {
  switch (action.type) {
    case UnitActionType.FETCH_UNITS:
      return { ...state, isLoading: true }

    case UnitActionType.FETCH_UNITS_SUCCESS:
      return { isLoading: false, error: null, units: state.units.concat(action.payload) }

    case UnitActionType.FETCH_UNITS_ERROR:
      return { ...state, isLoading: false, error: "ошибка загрузки юнитов" }

    case UnitActionType.ADD_UNITS:
      return { isLoading: false, error: null, units: state.units.concat(action.payload) }

    default: return state
  }

}