import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
  LocalizationProvider,
} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

interface DatePickerProps extends MuiDatePickerProps<Date> {}

export const DatePicker: React.VFC<DatePickerProps> = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker {...props} />
    </LocalizationProvider>
  );
};
