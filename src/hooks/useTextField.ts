import { ChangeEvent, useCallback, useState } from 'react';

export const useTextForm = (initText: string = '') => {
  const [state, setState] = useState<string>(initText);
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setState(e.target.value),
    []
  );
  return { state, onChange };
};
