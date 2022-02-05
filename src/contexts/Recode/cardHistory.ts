import React from 'react';
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

const defaultContext: typeContext = { cardData: initCardHistory() };

export const cardHistoyState = () => {
  const { state: cardData } = useCardHistory(initCardHistory(), '/records');
  return { cardData };
};

export const cardHistoryContext =
  React.createContext<typeContext>(defaultContext);
