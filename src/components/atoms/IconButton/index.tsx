import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material';

interface IconButtonProps extends MuiIconButtonProps {}

export const IconButton: React.VFC<IconButtonProps> = (props) => {
  return <MuiIconButton {...props} />;
};
