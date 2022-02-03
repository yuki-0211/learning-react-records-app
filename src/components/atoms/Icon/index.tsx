import { Icon as MuiIcon, IconProps as MuiIconProps } from '@mui/material';

interface IconProps extends MuiIconProps {}

export const Icon: React.VFC<IconProps> = ({
  sx,
  color,
  fontSize,
  children,
}) => {
  return (
    <MuiIcon sx={sx} color={color} fontSize={fontSize}>
      {children}
    </MuiIcon>
  );
};
