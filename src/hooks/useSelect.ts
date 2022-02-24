import { SelectChangeEvent } from '@mui/material';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { TypeAPI } from '../services/Type';
import { typeSelectVariants } from '../types/selectVariants';

export const useSelect = (initData: typeSelectVariants[]) => {
  /*
  Holds the data of the list box as a state.
  It will only be updated initially.
  */

  const api = new TypeAPI();
  const [state, setState] = useState<string>('');
  const onChange = useCallback(
    (event: SelectChangeEvent<string>, child: ReactNode) => setState(event.target.value),
    []
  );
  const [select, setSelect] = useState(initData);
  useEffect(() => {
    api.getAllRecord(setSelect);
  }, []);
  return { state, onChange, select };
};
