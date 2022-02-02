import { List as MuiList, ListProps as MuiListProps } from '@mui/material';

interface ListProps extends MuiListProps {}

export const List: React.VFC<ListProps> = ({ sx, children }) => {
  return <MuiList sx={sx}>{children}</MuiList>;
};
