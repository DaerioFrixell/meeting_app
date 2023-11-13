export type UserState = {
  isLoading: boolean
  errors: null | {}
  statistics: {
    countAllUnits: number
    /** это массив со значениями по статусам. Изменить название поля объекта! */
    onlineMeet: number
    offlineMeet: number
  }
}

export const initUserState: UserState = {
  isLoading: false,
  errors: null,
  statistics: {
    countAllUnits: 0,
    /** это массив со значениями по статусам. Изменить название поля объекта! */
    onlineMeet: 0,
    offlineMeet: 0,
  }
}

export const userReducer = (state: UserState, action: any): UserState => {
  switch ("userAction") {
    default: return state
  }
}