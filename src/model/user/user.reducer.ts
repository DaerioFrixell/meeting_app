export type UserState = {
  isLoading: boolean
  errors: null | {}
  statistics: {
    countAllUnits: number
    onlineMeet: number
    offlineMeet: number
  }
}

export const initUserState: UserState = {
  isLoading: false,
  errors: null,
  statistics: {
    countAllUnits: 0,
    onlineMeet: 0,
    offlineMeet: 0,
    // и другие поля, пока хз что нужно. Возможно процент/годовая цель и т.д.
  }
}

export const userReducer = (state: UserState, action: any): UserState => {
  switch ("userAction") {
    default: return state
  }
}