import {
  TextField as MuiTextField,
  StandardTextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import { forwardRef, Ref } from 'react';

interface RefTextFieldProps extends MuiTextFieldProps {}

export const RefTextField = forwardRef<
  HTMLInputElement | number | null,
  RefTextFieldProps
>((props: RefTextFieldProps, ref?: Ref<HTMLInputElement | number | null>) => {
  return <MuiTextField inputRef={ref} {...props} />;
});
