import { StatusMark } from "../../Data/statuses"
import { UserAction_E, UserActions } from "./user.type"



export type UserState = {
  isLoading: boolean
  errors: null | {}
  statistics: {
    countAllUnits: number
    /** DO - это массив со значениями по статусам. Изменить название поля объекта! */
    onlineMeet: number
    offlineMeet: number
    statuses: {
      status: StatusMark
      value: number
    }[] | []
  }
}

export const initUserState: UserState = {
  isLoading: false,
  errors: null,
  statistics: {
    countAllUnits: 0,
    /** DO - это массив со значениями по статусам. Изменить название поля объекта! */
    onlineMeet: 0,
    offlineMeet: 0,
    statuses: []
  }
}

export const userReducer = (state = initUserState, action: UserActions): UserState => {
  switch (action.type) {
    case UserAction_E.INIT_STATS:
      return {
        ...state,
        statistics: {
          ...state.statistics,
          statuses: action.payload
        }
      }

    default: return state
  }
}