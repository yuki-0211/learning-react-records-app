import {
  SwipeableDrawer as MuiSwipeableDrawer,
  SwipeableDrawerProps as MuiSwipeableDrawerProps,
} from '@mui/material';

interface SwipeableDrawerProps extends MuiSwipeableDrawerProps {}

export const SwipeableDrawer: React.VFC<SwipeableDrawerProps> = ({
  anchor,
  open,
  onClose,
  onOpen,
  sx,
  children,
}) => {
  return (
    <MuiSwipeableDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      sx={sx}
    >
      {children}
    </MuiSwipeableDrawer>
  );
};
