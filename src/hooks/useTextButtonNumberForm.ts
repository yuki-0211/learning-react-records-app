import { ChangeEvent, useCallback, useReducer } from "react"
import { reducerTextButtonNumberForm } from "../reducers/reducerTextButtonNumberForm"


const initialInput = {count:"0"}
export const useTextButtonNumberForm = () => {
    const [state, dispatch] = useReducer(reducerTextButtonNumberForm, initialInput)
    const decrement = useCallback(() => dispatch({ type: "decrement" }), [])
    const increment = useCallback(() => dispatch({ type: "increment" }), [])
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch({ type: "input", payload: e.target.value }), [])
    return {state,decrement,increment,onChange}
}