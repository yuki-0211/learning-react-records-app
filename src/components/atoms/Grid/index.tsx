import { Grid as MuiGrid, GridProps as MuiGridProps } from '@mui/material';

interface GridProps extends MuiGridProps {}

export const Grid: React.VFC<GridProps> = ({
  container,
  item,
  alignItems,
  direction,
  justifyContent,
  justifyItems,
  xs,
  children,
}) => {
  return (
    <MuiGrid
      container={container}
      item={item}
      alignItems={alignItems}
      direction={direction}
      justifyContent={justifyContent}
      justifyItems={justifyItems}
      xs={xs}
    >
      {children}
    </MuiGrid>
  );
};
