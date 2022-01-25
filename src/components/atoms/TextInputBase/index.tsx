
import { InputBase, InputBaseProps} from "@mui/material";
import { forwardRef, Ref } from "react";

export const TextInputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  (props: InputBaseProps, ref: Ref<HTMLInputElement>) => {
    return (
      <InputBase
        placeholder={props.placeholder}
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