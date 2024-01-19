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
        units: action.payload,
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

    case UnitAction_E.DELETE_UNITS:
      return {
        ...state,
        isLoading: false,
        error: null,
        units: state.units.filter(unit => unit.id !== action.payload)
      }

    default:
      return state;
  }
}

// V2: рассмотреть возможность вынести функцию в отдельный файл, чтобы здесь был только Reducer.
const updateStateUnits = (state: UnitInitState_T, payload: UnitUpdateV1): UnitV1[] => {
  const copyState = structuredClone(state);

  for (let i = 0; i < copyState.units.length; i++) {
    if (copyState.units[i].id === payload.id) {
      Object.assign(copyState.units[i], payload);
      break;
    }
  }

  return copyState.units;
}
