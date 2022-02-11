import {
  Divider as MuiDivider,
  DividerProps as MuiDividerProps,
} from '@mui/material';

interface DividerProps extends MuiDividerProps {}

export const Divider: React.VFC<DividerProps> = (props) => {
  return <MuiDivider {...props} />;
};
