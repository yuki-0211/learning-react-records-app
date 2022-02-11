import { SelectChangeEvent } from '@mui/material';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { getRequest } from '../lib/axios';
import { typeSelectVariants } from '../types/selectVariants';

export const useSelect = (initData: typeSelectVariants[], URL: string) => {
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
