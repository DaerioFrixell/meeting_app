import { UpdateUnit } from '../Data/Unit'
import { InitState, UnitActions, UnitActionType } from './unitTypes'

const initialState: InitState = {
  isLoading: false,
  error: null,
  units: [],
}

export const unitReducer = (
  state = initialState,
  action: UnitActions
): InitState => {
  switch (action.type) {
    case UnitActionType.FETCH_UNITS:
      return { ...state, isLoading: true }

    case UnitActionType.OFF_LOADING:
      return { ...state, isLoading: false }

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
        isLoading: false,
        error: null,
        units: state.units.concat(action.payload),
      }

    case UnitActionType.UPDATE_UNIT:
      return {
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

const updateStateUnits = (state: InitState, payload: UpdateUnit): any[] => {  
  for(let i = 0; i < state.units.length; i++) {
    if (state.units[i].id === payload.id) {
      Object.assign(state.units[i], payload);
      break
    }
  }
  return state.units
}
