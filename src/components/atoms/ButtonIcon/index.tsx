import { IconButton,IconButtonProps } from "@mui/material";

export const ButtonIcon: React.VFC<IconButtonProps> = ({
    
  color = "primary",
  disabled = false,
  disableFocusRipple = false,
  disableRipple = false,
  size = "medium",
  sx,
  onClick,
  children,
}) => {
  return (
    <IconButton
      color={color}
      disabled={disabled}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      size={size}
      sx={sx}
      onClick={() => onClick}
    >
      {children}
    </IconButton>
  );
};