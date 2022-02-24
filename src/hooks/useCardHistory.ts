import { useEffect, useState } from 'react';
import { RecordAPI } from '../services/Record';
import { typeCardHistory } from '../types/cardHistory';

export const useCardHistory = (initData: typeCardHistory[]) => {
  /*
  Holds the data of the learning record as a state.
  It will only be updated initially,
  but will be updated every time the edit or delete button is pressed in the future.
  */
  const api = new RecordAPI();
  const [state, setState] = useState(initData);
  useEffect(() => {
    api.getAllRecord(setState);
  }, []);
  return { state };
};
