import {
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps,
} from '@mui/material';

interface InputLabelProps extends MuiInputLabelProps {}

export const InputLabel: React.VFC<InputLabelProps> = (props) => {
  return <MuiInputLabel {...props} />;
};
