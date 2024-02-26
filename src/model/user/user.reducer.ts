import { UnitV1 } from "../../types/UnitV1"
import { StatisticByYear_T } from "../../types/V2/userApiV2.type"
import { UserAction_E, UserActions } from "./user.type"


// TO DO: почему тип здесь?
export type UserState = {
  isLoading: boolean
  errors: null | {},
  units: UnitV1[] | null,
  statistics: {
    unitsCount: number
    onlineMeet: number
    offlineMeet: number

    onlineStat: StatisticByYear_T[]
    offlineStat: StatisticByYear_T[]
    statuses: any[]
  }
}

export const initUserState: UserState = {
  isLoading: false,
  errors: null,
  units: null,
  statistics: {
    unitsCount: 0,
    onlineMeet: 0,
    offlineMeet: 0,

    onlineStat: [],
    offlineStat: [],
    statuses: []
  }
}

export const userReducer = (state = initUserState, action: UserActions): UserState => {
  const userStateClone = structuredClone(state)
  switch (action.type) {
    case UserAction_E.ONLINE_STAT:
      return {
        ...userStateClone,
        statistics: {
          ...userStateClone.statistics,
          onlineStat: action.payload,
        }
      }

    case UserAction_E.OFFLINE_STAT:
      return {
        ...userStateClone,
        statistics: {
          ...userStateClone.statistics,
          offlineStat: action.payload,
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