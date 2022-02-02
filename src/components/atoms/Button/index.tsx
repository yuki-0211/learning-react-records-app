import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

export interface ButtonProps extends MuiButtonProps {}

export const Button: React.VFC<ButtonProps> = ({
  color = 'primary',
  disabled = false,
  disableElevation = false,
  disableFocusRipple = false,
  disableRipple = false,
  fullWidth = false,
  size = 'medium',
  variant = 'text',
  sx,
  onClick,
  children,
}) => {
  return (
    <MuiButton
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};
