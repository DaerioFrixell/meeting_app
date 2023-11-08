import { UnitUpdateV1, UnitV1 } from '../Data/UnitV1'
import { UnitActions, UnitActionType, UnitInitState } from './unitTypes'

const initialState: UnitInitState = {
  isLoading: false,
  error: null,
  units: [],
}

export const unitReducer = (
  state = initialState,
  action: UnitActions
): UnitInitState => {
  switch (action.type) {
    case UnitActionType.FETCH_UNITS:
      return {
        ...state,
        isLoading: true
      }

    case UnitActionType.OFF_LOADING:
      return {
        ...state,
        isLoading: false
      }

    case UnitActionType.FETCH_UNITS_SUCCESS:
      return {
        isLoading: false,
        error: null,
        units: state.units.concat(action.payload),
      }

    case UnitActionType.FETCH_UNITS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'ошибка загрузки юнитов',
      }

    case UnitActionType.ADD_UNITS:
      return {
        ...state,
        isLoading: false,
        error: null,
        units: state.units.concat(action.payload),
      }

    case UnitActionType.UPDATE_UNIT:
      return {
        ...state,
        isLoading: false,
        error: null,
        units: updateStateUnits(state, action.payload),
      }

    default:
      return state
  }
}

/** TO DO
 * вынести функцию в middleware, в thunk или еще куда-то.
 * оставлять редакс чистым для чтения
 */

const updateStateUnits = (state: UnitInitState, payload: UnitUpdateV1): UnitV1[] => {
  for (let i = 0; i < state.units.length; i++) {
    if (state.units[i].id === payload.id) {
      Object.assign(state.units[i], payload);
      break
    }
  }
  return state.units
}
