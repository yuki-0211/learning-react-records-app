import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
} from '@mui/material';

interface AppBarProps extends MuiAppBarProps {}

export const AppBar: React.VFC<AppBarProps> = ({ position, sx, children }) => {
  return (
    <MuiAppBar position={position} sx={sx}>
      {children}
    </MuiAppBar>
  );
};
