import { SelectChangeEvent } from '@mui/material';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { getRequest } from '../lib/axios';

export const useCardHistory = (
  initData: {
    title: string;
    type: string;
    time: number;
    rank: number;
    date: number;
    comment: string;
  }[],
  URL: string
) => {
  const [state, setState] = useState(initData);
  useEffect(() => {
    getRequest({ URL: URL, setter: setState });
  }, []);
  return { state };
};
