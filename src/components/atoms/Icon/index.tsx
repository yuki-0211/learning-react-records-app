import { Icon as MuiIcon, IconProps as MuiIconProps } from '@mui/material';

interface IconProps extends MuiIconProps {}

export const Icon: React.VFC<IconProps> = (props) => {
  return <MuiIcon {...props} />;
};
