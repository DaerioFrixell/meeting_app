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
        units: asd(state, action.payload),
      }

    default:
      return state
  }
}

const asd = (state: InitState, payload: UpdateUnit): any[] => {
  const allUnits = state.units
  const d = state.units.filter((u) => u.id !== payload.id)
  state.units.push(payload)
  console.log('pady', state.units)

  // const newAllUnits = []

  // for (let i = 0; i < allUnits.length; i++) {
  //   if (allUnits[i].id === payload.id) {
  //     console.log('was: ', allUnits[i])
  //     console.log('now: ', payload)

  //     // allUnits[i] = {payload}
  //     console.log(
  //       `now obj with id = ${allUnits[i].id} = ${allUnits[i]}`
  //     )
  //   }
  //   newAllUnits.push(allUnits[i])
  // }

  return state.units
}
