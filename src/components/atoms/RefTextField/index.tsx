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
  return (
    <MuiTextField
      placeholder={props.placeholder}
      inputRef={ref}
      label={props.label}
      helperText={props.helperText}
      onChange={(e) => props.onChange?.(e)}
      style={props.style}
      inputProps={props.inputProps}
      value={props.value}
      size={props.size}
      autoFocus={props.autoFocus}
      fullWidth={props.fullWidth}
      variant="standard"
      sx={props.sx}
    />
  );
});
