import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
} from '@mui/material';

interface ListItemButtonProps extends MuiListItemButtonProps {}

export const ListItemButton: React.VFC<ListItemButtonProps> = ({
  key,
  sx,
  children,
}) => {
  return (
    <MuiListItemButton key={key} sx={sx}>
      {children}
    </MuiListItemButton>
  );
};
