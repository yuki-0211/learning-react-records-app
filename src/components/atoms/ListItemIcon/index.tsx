import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps as MuiListItemIconProps,
} from '@mui/material';

interface ListItemIconProps extends MuiListItemIconProps {}

export const ListItemIcon: React.VFC<ListItemIconProps> = ({
  sx,
  children,
}) => {
  return <MuiListItemIcon sx={sx}>{children}</MuiListItemIcon>;
};
