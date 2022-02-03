import {
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextProps,
} from '@mui/material';

interface ListItemTextProps extends MuiListItemTextProps {}

export const ListItemText: React.VFC<ListItemTextProps> = ({ primary, sx }) => {
  return <MuiListItemText primary={primary} sx={sx} />;
};
