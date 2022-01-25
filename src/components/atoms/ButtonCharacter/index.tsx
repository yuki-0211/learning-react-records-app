import { Button, ButtonProps } from "@mui/material";

export const ButtonCharacter: React.VFC<ButtonProps> = ({
  color = "primary",
  disabled = false,
  disableElevation = false,
  disableFocusRipple = false,
  disableRipple = false,
  fullWidth = false,
  size = "medium",
  variant = "text",
  sx,
  onClick,
  children,
}) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
      sx={sx}
      onClick={() => onClick}
    >
      {children}
    </Button>
  );
};