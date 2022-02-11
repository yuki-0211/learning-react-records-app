import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/system';

interface BoxProps extends MuiBoxProps {}

export const Box: React.VFC<BoxProps> = (props) => {
  return <MuiBox {...props} />;
};
