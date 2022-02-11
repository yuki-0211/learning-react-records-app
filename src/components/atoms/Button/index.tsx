import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

export interface ButtonProps extends MuiButtonProps {}

export const Button: React.VFC<ButtonProps> = (props) => {
  return <MuiButton {...props} />;
};
