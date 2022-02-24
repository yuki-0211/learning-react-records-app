import React, { createContext } from 'react';
import { useCardHistory } from '../hooks/useCardHistory';
import { initCardHistory } from '../init/initCardHistroy';
import { typeCardHistory } from '../types/cardHistory';

interface typeContext {
  cardData: typeCardHistory[];
}

export const cardHistoryContext = createContext({} as typeContext);

export const CardHistoyProvider = (props: React.PropsWithChildren<{}>) => {
  const { state: cardData } = useCardHistory(initCardHistory());

  return <cardHistoryContext.Provider value={{ cardData }} {...props} />;
};
