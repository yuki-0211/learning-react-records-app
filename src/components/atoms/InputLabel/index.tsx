import {
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps,
} from '@mui/material';

interface InputLabelProps extends MuiInputLabelProps {}

export const InputLabel: React.VFC<InputLabelProps> = ({
  id,
  sx,
  children,
}) => {
  return (
    <MuiInputLabel id={id} sx={sx}>
      {children}
    </MuiInputLabel>
  );
};
