import {
  SwipeableDrawer as MuiSwipeableDrawer,
  SwipeableDrawerProps as MuiSwipeableDrawerProps,
} from '@mui/material';

interface SwipeableDrawerProps extends MuiSwipeableDrawerProps {}

export const SwipeableDrawer: React.VFC<SwipeableDrawerProps> = (props) => {
  return <MuiSwipeableDrawer {...props} />;
};
