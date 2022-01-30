
interface Store {
    count:string | undefined
}
type AcctionType =
    | {type:"increment"}
    | {type:"decrement"}
    | {type:"input", payload : string}

export const reducerTextButtonNumberForm = (state:Store, action:AcctionType) => {
  /*
  Failure Example
    case 'increment':
      state.count = String(Number(state.count) + 1)
      return state
  In this code, state.current is updated, but no rendering is done because there is no change in the state.
  */
  switch (action.type) {
    case 'increment':
      return { count: String(Number(state.count) + 1) }
    case 'decrement':
      return { count: String(Number(state.count) - 1) }
    case 'input':
      return { count: action.payload }
    default:
      return state;
  }
}