interface Store {
    count:number
}
type AcctionType =
    | {type:"increment"}
    | {type:"decrement"}

export const reducerTextChangeNumber = (state:Store, action:AcctionType) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state;
  }
}