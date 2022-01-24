import { OutlinedInput, OutlinedTextFieldProps } from "@mui/material";
import { forwardRef, Ref } from "react";

interface Props extends OutlinedTextFieldProps {
  onChange: () => void;
}

export const InputForm = forwardRef<HTMLInputElement, Props>(
  (props: Props, ref: Ref<HTMLInputElement>) => {
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