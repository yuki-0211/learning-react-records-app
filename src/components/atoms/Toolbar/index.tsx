import {
  Toolbar as MuiToolbar,
  ToolbarProps as MuiToolbarProps,
} from '@mui/material';

interface ToolbarProps extends MuiToolbarProps {}

export const Toolbar: React.VFC<ToolbarProps> = ({ sx, children }) => {
  return <MuiToolbar sx={sx}>{children}</MuiToolbar>;
};
