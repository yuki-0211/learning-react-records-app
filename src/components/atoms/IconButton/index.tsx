import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material';

interface IconButtonProps extends MuiIconButtonProps {}

export const IconButton: React.VFC<IconButtonProps> = ({
  color = 'primary',
  disabled = false,
  disableFocusRipple = false,
  disableRipple = false,
  size = 'medium',
  edge = 'start',
  sx,
  onClick,
  children,
}) => {
  return (
    <MuiIconButton
      color={color}
      disabled={disabled}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      size={size}
      edge={edge}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </MuiIconButton>
  );
};
