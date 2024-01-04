import { UnitUpdateV1, UnitV1 } from '../Data/UnitV1'
import { UnitAction_E, UnitActions, UnitInitState_T } from './unitTypes'

const initialState: UnitInitState_T = {
  isLoading: false,
  error: null,
  units: [],
}

export const unitReducer = (state = initialState, action: UnitActions): UnitInitState_T => {
  switch (action.type) {
    case UnitAction_E.FETCH_UNITS:
      return {
        ...state,
        isLoading: true
      }

    case UnitAction_E.OFF_LOADING:
      return {
        ...state,
        isLoading: false
      }

    case UnitAction_E.FETCH_UNITS_SUCCESS:
      return {
        isLoading: false,
        error: null,
        units: state.units.concat(action.payload),
      }

    case UnitAction_E.FETCH_UNITS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'ошибка загрузки юнитов',
      }

    case UnitAction_E.ADD_UNITS:
      return {
        ...state,
        isLoading: false,
        error: null,
        units: state.units.concat(action.payload),
      }

    case UnitAction_E.UPDATE_UNIT:
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

/** DO
 * вынести функцию в middleware, в thunk или еще куда-то.
 * оставлять редакс чистым для чтения
 */

const updateStateUnits = (state: UnitInitState_T, payload: UnitUpdateV1): UnitV1[] => {
  for (let i = 0; i < state.units.length; i++) {
    if (state.units[i].id === payload.id) {
      Object.assign(state.units[i], payload);
      break
    }
  }
  return state.units
}
