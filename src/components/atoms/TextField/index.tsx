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
> = (props) => {
  return <MuiTextField variant="standard" {...props} />;
};
