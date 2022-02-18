import { useEffect, useState } from 'react';
import { getRequest } from '../lib/axios';
import { typeCardHistory } from '../types/cardHistory';

export const useCardHistory = (initData: typeCardHistory[], URL: string) => {
  /*
  Holds the data of the learning record as a state.
  It will only be updated initially,
  but will be updated every time the edit or delete button is pressed in the future.
  */

  const [state, setState] = useState(initData);
  useEffect(() => {
    getRequest({ URL: URL, setter: setState });
  }, []);
  return { state };
};
