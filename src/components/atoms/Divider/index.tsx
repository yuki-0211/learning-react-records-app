import {
  Divider as MuiDivider,
  DividerProps as MuiDividerProps,
} from '@mui/material';

interface DividerProps extends MuiDividerProps {}

export const Divider: React.VFC<DividerProps> = ({ orientation, sx }) => {
  return <MuiDivider orientation={orientation} sx={sx} />;
};
