import { useCallback, useState } from 'react';
export const useDatePicker = () => {
  const initialDate = new Date();
  const [state, setState] = useState<Date | null>(initialDate);
  const onChange = useCallback(
    (date: Date | null, keyboardInputValue?: string) => setState(date),
    []
  );
  return { state, onChange };
};
