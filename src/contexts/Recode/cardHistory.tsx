import React, { createContext } from 'react';
import { useCardHistory } from '../../hooks/useCardHistory';
import { initCardHistory } from '../../init/initCardHistroy';

interface typeContext {
  cardData: {
    title: string;
    type: string;
    time: number;
    rank: number;
    date: number;
    comment: string;
  }[];
}

export const cardHistoryContext = createContext({} as typeContext);

export const CardHistoyProvider = (props: React.PropsWithChildren<{}>) => {
  const { state: cardData } = useCardHistory(initCardHistory(), '/records');

  return <cardHistoryContext.Provider value={{ cardData }} {...props} />;
};
