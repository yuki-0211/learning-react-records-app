import {
  TextField as MuiTextField,
  StandardTextFieldProps as MuiStandardTextFieldProps,
  FilledTextFieldProps as MuiFilledTextFieldProps,
  OutlinedTextFieldProps as MuiOutlinedTextFieldProps,
} from '@mui/material';

interface StandardTextFieldProps extends MuiStandardTextFieldProps {}
interface FilledTextFieldProps extends MuiFilledTextFieldProps {}
interface OutlinedTextFieldProps extends MuiOutlinedTextFieldProps {}

/*
Apply all variant props to support datepicker.
*/

export const TextField: React.VFC<
  StandardTextFieldProps | FilledTextFieldProps | OutlinedTextFieldProps
> = ({
  placeholder,
  label,
  helperText,
  onChange,
  style,
  inputProps,
  value,
  size,
  autoFocus,
  fullWidth,
  sx,
}) => {
  return (
    <MuiTextField
      placeholder={placeholder}
      label={label}
      helperText={helperText}
      onChange={(e) => onChange?.(e)}
      style={style}
      inputProps={inputProps}
      value={value}
      size={size}
      autoFocus={autoFocus}
      fullWidth={fullWidth}
      variant="standard"
      sx={sx}
    />
  );
};
