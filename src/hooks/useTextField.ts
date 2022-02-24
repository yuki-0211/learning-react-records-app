import { ChangeEvent, useCallback, useState } from 'react';

export const useTextForm = (initText: string = '') => {
  /*
  Holds the state of a text form string.
  */

  const [state, setState] = useState<string>(initText);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setState(e.target.value), []);
  return { state, onChange };
};
