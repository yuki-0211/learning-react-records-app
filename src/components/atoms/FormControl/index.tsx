import {
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps,
} from '@mui/material';

interface FormControlProps extends MuiFormControlProps {}

export const FormControl: React.VFC<FormControlProps> = ({
  variant,
  fullWidth,
  sx,
  children,
}) => {
  return (
    <MuiFormControl fullWidth={fullWidth} variant={variant} sx={sx}>
      {children}
    </MuiFormControl>
  );
};
