import { SelectChangeEvent } from '@mui/material';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { getRequest } from '../lib/axios';

export const useSelect = (
  initData: { id: string; value: string }[],
  URL: string
) => {
  const [state, setState] = useState<string>('');
  const onChange = useCallback(
    (event: SelectChangeEvent<string>, child: ReactNode) =>
      setState(event.target.value),
    []
  );
  const [select, setSelect] = useState(initData);
  useEffect(() => {
    getRequest({ URL: URL, setter: setSelect });
  }, []);
  return { state, onChange, select };
};
