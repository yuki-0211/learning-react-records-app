import { useCallback, useState } from 'react';

export const useDatePicker = (initialDate = new Date()) => {
  /*
  Hold the state of date.
  */

  const [state, setState] = useState<Date | null>(initialDate);
  const onChange = useCallback(
    (date: Date | null, keyboardInputValue?: string) => setState(date),
    []
  );
  return { state, onChange };
};
