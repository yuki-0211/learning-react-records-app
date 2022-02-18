import { useCallback, useReducer } from 'react';
import { reducerDialog } from '../reducers/reducerDialog';

export const useDialog = (initialInput = { isOpen: false }) => {
  /*
  Hold the open or close state
  */

  const [state, dispatch] = useReducer(reducerDialog, initialInput);
  const open = useCallback(() => dispatch({ type: 'open' }), []);
  const close = useCallback(() => dispatch({ type: 'close' }), []);
  return { state, open, close };
};
