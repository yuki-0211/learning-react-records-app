import { ChangeEvent, useCallback, useReducer } from "react"
import { TextButtonNumberForm} from "../components/organisms/TextButtonNumberForm"
import { reducerTextChangeNumber } from "../reducers/TextChangeNumber"

const initialInput = {count:undefined}
export const Recoder = () => {
    const [state, dispatch] = useReducer(reducerTextChangeNumber,initialInput)
    const decrement = useCallback(() => dispatch({ type: "decrement" }),[])
    const increment = useCallback(() => dispatch({ type: "increment" }),[])
    const onChange = useCallback((e:ChangeEvent<HTMLInputElement>) => dispatch({ type: "input",payload:e.target.value }),[])

    return (
        <div>
            <TextButtonNumberForm
                count={state.count}
                onClickDecrease={decrement}
                onClickIncrease={increment}
                onChange={onChange}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
            {state.count}
        </div>
    )
}