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
        units: state.units.map((u) => {
          u.id === action.payload.id
            ? console.log('update id = ', action.payload.id)
            : console.log('something went wrong...')
        }), // сделать обновление Units
      }

    default:
      return state
  }
}

const asd = () => {}
