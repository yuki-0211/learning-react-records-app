import { Grid as MuiGrid, GridProps as MuiGridProps } from '@mui/material';

interface GridProps extends MuiGridProps {}

export const Grid: React.VFC<GridProps> = (props) => {
  return <MuiGrid {...props} />;
};
