import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/system';

interface BoxProps extends MuiBoxProps {}

export const Box: React.VFC<BoxProps> = ({
  role,
  onClick,
  onKeyDown,
  sx,
  children,
}) => {
  return (
    <MuiBox role={role} onClick={onClick} onKeyDown={onKeyDown} sx={sx}>
      {children}
    </MuiBox>
  );
};
