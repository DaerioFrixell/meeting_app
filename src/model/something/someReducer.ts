type Qee = {
  array: any[]
}
const initialState: Qee = {
  array: []
}

// Reducer для дебага RootState
export const someReducer = (
  state = initialState,
  action: any
): Qee => {
  switch (action.type) {
    default:
      return state
  }
}
