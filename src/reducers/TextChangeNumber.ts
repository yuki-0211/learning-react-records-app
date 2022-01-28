import { MutableRefObject } from "react";

interface Store {
    count:number
}
type AcctionType =
    | {type:"increment"}
    | {type:"decrement"}

export const reducerTextChangeNumber = (state:MutableRefObject<number|null>, action:AcctionType) => {
  if (state.current === null) {
    return state
  }
  switch (action.type) {
    case 'increment':
      state.current = state.current + 1
      return state
    case 'decrement':
      state.current = state.current - 1
      return state;
    default:
      return state;
  }
}