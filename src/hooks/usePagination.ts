import { ChangeEvent, useCallback, useState } from 'react';

export const usePagination = () => {
  const [state, setState] = useState<number>(3);
  const onChange = useCallback(
    (event: ChangeEvent<unknown>, page: number) => setState(page),
    []
  );
  return { state, onChange };
};
