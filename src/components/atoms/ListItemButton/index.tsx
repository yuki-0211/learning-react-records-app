import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
} from '@mui/material';

interface ListItemButtonProps extends MuiListItemButtonProps {}

export const ListItemButton: React.VFC<ListItemButtonProps> = ({
  key,
  onClick,
  sx,
  children,
}) => {
  return (
    <MuiListItemButton onClick={onClick} key={key} sx={sx}>
      {children}
    </MuiListItemButton>
  );
};
