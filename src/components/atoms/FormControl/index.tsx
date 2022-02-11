import {
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps,
} from '@mui/material';

interface FormControlProps extends MuiFormControlProps {}

export const FormControl: React.VFC<FormControlProps> = (props) => {
  return <MuiFormControl {...props} />;
};
