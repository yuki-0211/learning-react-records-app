import { useCallback, useReducer } from 'react';
import { reducerDialog } from '../reducers/reducerDialog';

export const useDialog = (initialInput = { isOpen: false }) => {
  const [state, dispatch] = useReducer(reducerDialog, initialInput);
  const open = useCallback(() => dispatch({ type: 'open' }), []);
  const close = useCallback(() => dispatch({ type: 'close' }), []);
  return { open, close };
};
