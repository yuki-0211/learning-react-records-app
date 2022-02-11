import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
  LocalizationProvider,
} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

interface DatePickerProps extends MuiDatePickerProps<Date> {}

export const DatePicker: React.VFC<DatePickerProps> = ({
  openTo,
  value,
  label,
  views,
  onChange,
  renderInput,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        openTo={openTo}
        value={value}
        label={label}
        views={views}
        onChange={onChange}
        renderInput={renderInput}
      />
    </LocalizationProvider>
  );
};
