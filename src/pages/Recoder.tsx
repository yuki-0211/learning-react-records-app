import { MouseEventHandler, useReducer, useRef } from "react"
import { TextChangeNumber } from "../components/organisms/TextChangeNumber"
import { reducerTextChangeNumber } from "../reducers/TextChangeNumber"

const initialState = {count:0}
export const Recoder = () => {
    const [state, dispatch] = useReducer(reducerTextChangeNumber, initialState)
    const inputRefCount = useRef<HTMLInputElement>(null)
    const clickDecrement: MouseEventHandler<HTMLButtonElement> = (e) => {
        console.log(state)
        console.log(inputRefCount.current)
        dispatch({ type: "decrement" })
    }
    const clickIncrement: MouseEventHandler<HTMLButtonElement> = (e) => {
        console.log(state)
        console.log(inputRefCount.current)
        dispatch({ type: "increment" })
    }
    return (
        <div>
        <TextChangeNumber count={state.count} onClickDecrease={clickDecrement} onClickIncrease={clickIncrement} ref={inputRefCount}/>
        </div>
    )
}