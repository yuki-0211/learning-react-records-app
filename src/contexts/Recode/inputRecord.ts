import { SelectChangeEvent } from '@mui/material';
import React, { ChangeEvent, ReactNode } from 'react';
import { useDatePicker } from '../../hooks/useDatePicker';
import { usePagination } from '../../hooks/usePagination';
import { useSelect } from '../../hooks/useSelect';
import { useTextButtonNumberForm } from '../../hooks/useTextButtonNumberForm';
import { useTextForm } from '../../hooks/useTextField';
import { initInputRecord } from '../../init/initInputRecord';

interface typeContext {
  title: string;
  titleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  typeOnChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  select: {
    id: string;
    value: string;
  }[];
  rank: number;
  rankOnChange: (event: ChangeEvent<unknown>, page: number) => void;
  time: { count: string | undefined };
  timeDecrement: () => void;
  timeIncrement: () => void;
  timeOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  comment: string;
  commentOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  date: Date | null;
  dateOnChange: (
    date: Date | null,
    keyboardInputValue?: string | undefined
  ) => void;
}
const defaultContext: typeContext = {
  title: '',
  titleOnChange: () => {},
  type: '',
  typeOnChange: () => {},
  select: [
    {
      id: '',
      value: '',
    },
  ],
  rank: 0,
  rankOnChange: () => {},
  time: { count: '' },
  timeDecrement: () => {},
  timeIncrement: () => {},
  timeOnChange: () => {},
  comment: '',
  commentOnChange: () => {},
  date: new Date(),
  dateOnChange: () => {},
};
export const inputRecordState = () => {
  const { state: title, onChange: titleOnChange } = useTextForm();
  const {
    state: type,
    onChange: typeOnChange,
    select,
  } = useSelect(initInputRecord(), '/types');
  const { state: rank, onChange: rankOnChange } = usePagination();
  const {
    state: time,
    decrement: timeDecrement,
    increment: timeIncrement,
    onChange: timeOnChange,
  } = useTextButtonNumberForm();
  const { state: comment, onChange: commentOnChange } = useTextForm();
  const { state: date, onChange: dateOnChange } = useDatePicker();

  return {
    title,
    titleOnChange,
    type,
    typeOnChange,
    select,
    rank,
    rankOnChange,
    time,
    timeDecrement,
    timeIncrement,
    timeOnChange,
    comment,
    commentOnChange,
    date,
    dateOnChange,
  };
};
export const inputRecordContext =
  React.createContext<typeContext>(defaultContext);