import {
  OutlinedInput as MuiOutlinedInput,
  OutlinedInputProps as MuiOutlinedInputProps,
} from '@mui/material';
import { forwardRef, Ref } from 'react';

interface OutlinedInputProps extends MuiOutlinedInputProps {}

export const OutlinedInput = forwardRef<HTMLInputElement, OutlinedInputProps>(
  (props: OutlinedInputProps, ref: Ref<HTMLInputElement>) => {
    return <MuiOutlinedInput {...props} inputRef={ref} />;
  }
);
