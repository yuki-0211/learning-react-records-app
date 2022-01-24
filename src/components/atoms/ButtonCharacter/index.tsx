import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  onClick: () => void;
}

export const ButtonCharacter: React.VFC<Props> = ({
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
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
};