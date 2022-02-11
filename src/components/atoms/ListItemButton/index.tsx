import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
} from '@mui/material';

interface ListItemButtonProps extends MuiListItemButtonProps {}

export const ListItemButton: React.VFC<ListItemButtonProps> = (props) => {
  return <MuiListItemButton {...props} />;
};
