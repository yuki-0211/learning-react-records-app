import {
  InputBase as MuiInputBase,
  InputBaseProps as MuiInputBaseProps,
} from '@mui/material';
import { forwardRef, Ref } from 'react';

interface InputBaseProps extends MuiInputBaseProps {}

export const InputBase = forwardRef<
  HTMLInputElement | number | null,
  InputBaseProps
>((props: InputBaseProps, ref: Ref<HTMLInputElement | number | null>) => {
  return (
    <MuiInputBase
      placeholder={props.placeholder}
      inputRef={ref}
      onChange={(e) => props.onChange?.(e)}
      style={props.style}
      inputProps={props.inputProps}
      value={props.value}
      size={props.size}
      autoFocus={props.autoFocus}
    />
  );
});
