import { OutlinedInput, OutlinedTextFieldProps } from "@mui/material";
import { forwardRef, Ref } from "react";

export const TextFieldOutlined = forwardRef<HTMLInputElement, OutlinedTextFieldProps>(
  (props: OutlinedTextFieldProps, ref: Ref<HTMLInputElement>) => {
    return (
      <OutlinedInput
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