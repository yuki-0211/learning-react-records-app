import { useEffect, useState } from 'react';
import { getRequest } from '../lib/axios';
import { typeCardHistory } from '../types/cardHistory';

export const useCardHistory = (initData: typeCardHistory[], URL: string) => {
  const [state, setState] = useState(initData);
  useEffect(() => {
    getRequest({ URL: URL, setter: setState });
  }, []);
  return { state };
};
