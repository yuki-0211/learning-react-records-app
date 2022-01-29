
import { InputBase, InputBaseProps} from "@mui/material";
import { forwardRef, Ref } from "react";

export const TextInputBase = forwardRef<HTMLInputElement | number | null, InputBaseProps>(
  (props: InputBaseProps, ref: Ref<HTMLInputElement | number | null>) => {
    return (
      <InputBase
        placeholder={props.placeholder}
        inputRef={ref}
        onChange={e => props.onChange?.(e)}
        style={props.style}
        inputProps={props.inputProps}
        value={props.value}
        size={props.size}
        autoFocus={props.autoFocus}
      />
    );
  }
);