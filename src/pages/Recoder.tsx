import { useState } from "react"
import { MouseEventHandler, useReducer, useRef } from "react"
import { TextChangeNumber } from "../components/organisms/TextChangeNumber"
import { reducerTextChangeNumber } from "../reducers/TextChangeNumber"

export const Recoder = () => {
    const inputRefCount = useRef<number | null>(0)
    const [state, dispatch] = useReducer(reducerTextChangeNumber,inputRefCount)
    const [fieldNumber,setFieldNumber] = useState<number | null>(0)
    const onChange = () => {
        setFieldNumber(state.current)
    }
    const clickDecrement: MouseEventHandler<HTMLButtonElement> = (e) => {
        console.log(fieldNumber)
        console.log(state.current)
        dispatch({ type: "decrement" })
    }
    const clickIncrement: MouseEventHandler<HTMLButtonElement> = (e) => {
        console.log(fieldNumber)
        console.log(state.current)
        dispatch({ type: "increment" })
    }
    console.log(inputRefCount.current)
    return (
        <div>
            <TextChangeNumber
                count={fieldNumber}
                onClickDecrease={clickDecrement}
                onClickIncrease={clickIncrement}
                ref={state}
                onChange={onChange}
            />
        {fieldNumber}
        </div>
    )
}