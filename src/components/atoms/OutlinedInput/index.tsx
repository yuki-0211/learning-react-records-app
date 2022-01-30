import {
  OutlinedInput as MuiOutlinedInput,
  OutlinedInputProps as MuiOutlinedInputProps,
} from '@mui/material';
import { forwardRef, Ref } from 'react';

interface OutlinedInputProps extends MuiOutlinedInputProps {}

export const OutlinedInput = forwardRef<HTMLInputElement, OutlinedInputProps>(
  (props: OutlinedInputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <MuiOutlinedInput
        label={props.label}
        inputRef={ref}
        onChange={props.onChange}
        style={props.style}
        inputProps={props.inputProps}
        value={props.value}
        size={props.size}
        autoFocus={props.autoFocus}
      />
    );
  }
);
