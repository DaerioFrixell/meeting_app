import { UnitV1 } from "../../Data/UnitV1"
import { StatusMark } from "../../Data/statuses"
import { UserAction_E, UserActions } from "./user.type"


export type UserState = {
  isLoading: boolean
  errors: null | {},
  units: UnitV1[] | null,
  statistics: {
    unitsCount: number
    /** DO - это массив со значениями по статусам. Изменить название поля объекта! */
    onlineMeet: number
    offlineMeet: number
    statuses: any[]
  }
}

export const initUserState: UserState = {
  isLoading: false,
  errors: null,
  units: null,
  statistics: {
    unitsCount: 0,
    /** DO - это массив со значениями по статусам. Изменить название поля объекта! */
    onlineMeet: 0,
    offlineMeet: 0,
    statuses: []
  }
}

export const userReducer = (state = initUserState, action: UserActions): UserState => {
  const userStateClone = structuredClone(state)
  switch (action.type) {
    case UserAction_E.INIT_STATS:
      return {
        ...userStateClone,
        statistics: {
          ...userStateClone.statistics,
          statuses: action.payload,
        }
      }

    case UserAction_E.GET_UNITS_COUNT:
      return {
        ...userStateClone,
        statistics: {
          ...userStateClone.statistics,
          unitsCount: action.payload,
        }
      }

    default: return state
  }
}