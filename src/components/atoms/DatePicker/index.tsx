import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
  LocalizationProvider,
} from '@mui/lab';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { render } from '@testing-library/react';

interface DatePickerProps extends MuiDatePickerProps<Date> {}

export const DatePicker: React.VFC<DatePickerProps> = ({
  value,
  label,
  onChange,
  renderInput,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        value={value}
        label={label}
        onChange={onChange}
        renderInput={renderInput}
      />
    </LocalizationProvider>
  );
};
