import { ChangeEvent, useCallback, useReducer } from 'react';
import { reducerTextButtonNumberForm } from '../reducers/reducerTextButtonNumberForm';

export const useTextButtonNumberForm = (initialInput = { count: '0' }) => {
  /*
  Holds the status of a number that can be increased or decreased with a button.
  */

  const [state, dispatch] = useReducer(reducerTextButtonNumberForm, initialInput);
  const decrement = useCallback(() => dispatch({ type: 'decrement' }), []);
  const increment = useCallback(() => dispatch({ type: 'increment' }), []);
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: 'input', payload: e.target.value }),
    []
  );
  return { state, decrement, increment, onChange };
};
