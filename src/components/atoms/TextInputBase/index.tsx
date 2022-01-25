
import { InputBase, InputBaseProps} from "@mui/material";
import { forwardRef, Ref } from "react";

interface Props extends InputBaseProps {
  onChange: () => void;
}

export const TextInputBase = forwardRef<HTMLInputElement, Props>(
  (props: Props, ref: Ref<HTMLInputElement>) => {
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