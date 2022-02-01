import { ChangeEvent, useCallback, useState } from 'react';

export const useTextForm = () => {
  const [state, setState] = useState<string>('');
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setState(e.target.value),
    []
  );
  return { state, onChange };
};
