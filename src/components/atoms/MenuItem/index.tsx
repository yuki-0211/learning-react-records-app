import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from '@mui/material';

interface MenuItemProps extends MuiMenuItemProps {}

export const MenuItem: React.VFC<MenuItemProps> = ({ value, sx, children }) => {
  return (
    <MuiMenuItem value={value} sx={sx}>
      {children}
    </MuiMenuItem>
  );
};
