import { ChangeEvent, useCallback, useState } from 'react';

export const usePagination = (initPagination: number = 3) => {
  /*
  Hold the state of Pagination number.
  */

  const [state, setState] = useState<number>(initPagination);
  const onChange = useCallback((event: ChangeEvent<unknown>, page: number) => setState(page), []);
  return { state, onChange };
};
