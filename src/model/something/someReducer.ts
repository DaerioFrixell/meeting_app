type Qee = {
  array: any[]
}
const initialState: Qee = {
  array: []
}

export const someReducer = (
  state = initialState,
  action: any
): Qee => {
  switch (action.type) {
    default:
      return state
  }
}
