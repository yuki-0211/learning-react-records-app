import React from 'react';
import { useSwipeableTemporaryDrawer } from '../hooks/useSwipeableTemporaryDrawer';

interface typeContext {
  state: boolean;
  onChange: (
    open: boolean
  ) => (
    event: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>
  ) => void;
  url: string;
  onClick: (
    url: string
  ) => (
    event: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>
  ) => void;
}

const defaultContext: typeContext = {
  state: false,
  onChange: () => () => {},
  url: '',
  onClick: () => () => {},
};

export const swipeableTemporaryDrawerState = () => {
  const { state, onChange, url, onClick } = useSwipeableTemporaryDrawer();
  return { state, onChange, url, onClick };
};

export const swipeableTemporaryDrawerContext =
  React.createContext<typeContext>(defaultContext);
