import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, ReactNode } from 'react';
import { useDatePicker } from '../hooks/useDatePicker';
import { usePagination } from '../hooks/usePagination';
import { useSelect } from '../hooks/useSelect';
import { useTextButtonNumberForm } from '../hooks/useTextButtonNumberForm';
import { useTextForm } from '../hooks/useTextField';
import { initInputRecord } from '../init/initInputRecord';

type RecordContext = {
  title: string;
  titleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  typeOnChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  select: {
    id: string;
    value: string;
  }[];
  rank:string
  rankOnChange:(event: ChangeEvent<unknown>, page: number) => void
  time:{count:string}
  timeDecrement:() => void
  timeIncrement:() => void
  timeOnChange:() => void
  comment:string
  commentOnChange:(e: ChangeEvent<HTMLInputElement>)
  date: Date | null
  dateOnChange:(date: Date | null, keyboardInputValue?: string | undefined) => void
}
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
